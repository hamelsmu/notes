---
layout: default
title: Docker
---

Notes from the book [Docker In Action](https://www.manning.com/books/docker-in-action-second-edition?utm_source=google&utm_medium=search&utm_campaign=dynamicsearch&gclid=CjwKCAjwmMX4BRAAEiwA-zM4JtyXLeFoALyh7xvEtg9B7nTbf3VeOFzo6Sdu119z94d6cll6XsbKgxoCRmMQAvD_BwE)

import TOCInline from '@theme/TOCInline';

<TOCInline toc={toc} />;


# Chapter 1
- Docker containers are faster than VMs to start, partly because they do NOT offer any hardware virtualization.  
	- VMs provide hardware abstractions so you can run operating systems.
- Docker uses Linux `namespaces` and `cgropus`
	- Hamel: I don't know what this is
	

# Chapter 2

- Getting help: 
	- `docker help cp`
	- `docker help run`

- Linking containers:  `docker run --link` 
	- this is [apparently deprecated](https://docs.docker.com/network/links/) per the docs 
	- Opens a secure tunnel between two containers automatically
	- Also exposes environment variables and other things (see the docs)

- `docker cp`   copy files from a container to local filesystem

- Detach an interactive container:
	- Hold down `Control` and press `P` then `Q`

- Get logs `docker logs <container name>`
	- Hamel: This is like `kubectl logs`

- Run a new command in a running container `docker exec`
	- `docker exec <container_name> ps` will run the `ps` command and emit that to stdout

- Rename a container with `docker rename <current_name> <new_name>`

- `docker exec` run additional processes in an already running container

- `docker create` is the same as `docker run` except that the container is created in a stopped state.

- `docker run --read-only` allows you to run a container in a read only state, which you only need to do in special circumstances (you probably never need to use this).   You can make exceptions to the read only constraint with the `-v` flag:
		
![](Docker-In-Action/6453FD28-1552-474C-9869-F6E01C6EC9C8.png)

- Override the entrypoint using the `--entrypoint` flag (this is discussed in part 2 of the book).
		 
![](Docker-In-Action/276CD61C-3D6F-485A-8D88-8C2DD2EF8B5D.png)

### Injecting environment variables

With the `--env` or `-e` flags.  
A nice trick to see all the environment variables in a docker container is to use the Unix command `env`

![](Docker-In-Action/2070CA60-7C95-4BE8-B2C8-F68FF6B09C66.png)

Setting multiple environment variables: use `\` for multiline like this:

```bash
docker create \
  --env WORDPRESS_DB_HOST=<my database hostname> \
  --env WORDPRESS_DB_USER=site_admin \
  --env WORDPRESS_DB_PASSWORD=MeowMix42 \ 
wordpress:4
```

### Automatically restarting containers

Docker uses an exponential backoff strategy - double the previous time waiting until restarting.  

`docker run -d --restart always ... `

See [these restart policies](https://docs.docker.com/engine/reference/run/#restart-policies---restart) 

- no
- on-failure[:max-retries]
- always
- unless-stopped

### Removing containers vs. images

**Containers are the actual instantiation of an image**, just like how an object is an instantion of an instance of a class.

`docker rm`: remove a container
`docker rmi`: remove an image

# Chapter 3

- Two ways to publish an image
	- Build locally, push image to registry
	- Make a `Dockerfile` and use DockerHub's build system.  **This is preferred and considered to be safer, and DockerHub will mark your image as trusted if you do this** because it is the only way to provide transparency to what is in your image. 
- Search dockerhub by keyword , sorted descending by stars
	- `docker search <keyword>` 
	- example:  `docker search postgres`
- Using Alternative registries
	- `docker pull quay.io/dockerinaction/ch3_hello_registry:latest`

### Images as files

You can transport, save and load images as files!  (You don't have to push them to a registry). 

![](Docker-In-Action/AD7BCDC9-8130-45AE-89A9-DE5410EE845B.png)

You can then load the image:

`docker load -i myfile.tar`


# Chapter 4 Persistent Storage &. Shared State with Volumes
`-v` and `--volume` are aliases

`--volumes-from="<container-name>"`  Mount all volumes from the given container


### Different kind of Volumes
1. Bind mount - this is what you always use
2. Docker managed volume (2 kinds)
	1. Anonymous
	2. Named volume (a special case of Anonymous)

[Use volumes | Docker Documentation](https://docs.docker.com/storage/volumes/)
	- Named vs. Anonymous volumes: [article](https://medium.com/faun/what-are-anonymous-and-named-volumes-6cd787822a7d)
	- Hamel: maybe? You might use named volumes to persist data between containers.



### To persist data with named volumes

Named volume is a kind of anonymous volume where the mount point is managed by Docker.  Example of how you used a named volume:

1. Start container with a **named volume**:
	`docker run --name myDatabaseWithVolume -v appdata:/var/lib/mysql  mysql`
	save a table in the mysql database

2. Start a new container with the same **named volume**
	`docker run --name myDatabaseWithVolume2 -v appdata:/var/lib/mysql mysql`
       You should be able to see the same table you created in the last container b/c data has been persisted.

### See where Docker anonymous volumes store information

Unlike a bind mount, where you explicitly name the host location, docker will manage the storage location of anonymous volumes.  But how do you know where the files are stored on the host?

You can use `docker inspect` command filtered for the `Volumes` key to find the storage location on the host. 

Create a container with an anonymous volume.
`docker run -v /some/location --name cass-shared alpine`

`docker inspect -f "{{json .Volumes}}" cass-shared`

This will output a json blob which will show the mount points.

### Other things you didn't know about volumes
- when you mount a volume, it overrides any files already at that location
	- You can mount specific files which avoid this
	- if you specify a host directory that doesn't exist Docker will create it for you
		- exception: If you are mounting a file instead of a directory and it doesn't exist on the host, Docker will throw an error
- you can mount a volume as read only  `-v /source:/destination:ro`
	- see docs (there is this optional third argument for volumes)



### The `volumes-from` flag

Allows you to share volumes with another container.  When you use this flag, the same volumes are mounted into your container at the same location. 

![](Docker-In-Action/6B5A3266-48E5-4A8F-9051-651971AD8824.png)


Volumes are copied transitively, so this will automatically mount volumes that are also mounted this way from another container. 

**Caveats**
	- You cannot mount a shared volume to a different location within a container.  This is a limitation of `--volumes-from`
	- If you have a collision in the destination mount point among several `volumes-from` only one volume will survive, which you can ascertain from `docker inpsect`
			- see above for how to use `docker inspect`
	- You cannot change the write permission of the volume, you inherit whatever the permission is in the source container.

### Cleaning up volumes

`-v` flag

`docker rm -v` will delete any managed volumes referenced by the target container

However, if you delete all containers but forget a `-v` flag you will be left with an **orphaned volume**.  This is bad b/c it takes up disk space until cleaned up.  You have to run complicated cleanup steps to get rid of orphans.

Solution:  There is none, **its a good habit to use -v anytime you call docker rm**

Hamel: this means that- 
- Don't use managed volumes unless you really need it
- If you do use them, try to include makefiles that include `-v` as a part of things 

### Advanced Volume Stuff
- You can have a volume container p. 72 so that you can reference `--volume-from` from all your containers.  
- Data-paced volume containers, you can pre-load volume containers with data p. 73
- You can change the behavior of currently running containers by mounting configuration files and application in volumes.  In a way, Hamel

# Chapter 5 Single Host Networking
- Terminology:
	- protocols: tcp, http
	- interfaces: IP addresses
	- ports:  you know what this means
		- Customary ports:
			- HTTP: 80
			- MySQL: 3306
			- Memcached: 11211

Discuss advanced networking and creating a network using the `docker network` command.  Hamel: I don't see an immediate use for this.

- Special container networks:
	- `host`
		- `docker run --network host` allows you to pretend like the host is your local machine, and you can expose any port and that will bind to the host. 
	- `none`
		- `docker run --network none` closes all connection to the outside world.  This is useful for security. 

### exposing ports

`-p 8080`
This binds port 8080 to a **random** port on the host!  you can find the port that the container is bound to by `docker port <image name>`
example:
	`docker run -p 8080 --name listener alpine`
       `docker port listener`
	
This will give you output that looks like `container --> host` (which is reverse the other nomenclature of `host:container`

` -p 8080:8080` this binds the container's port to the host's port 8080

`-p 0.0.0.0:8080:8080/tcp` same as above but specifies the interface and the tcp protocol.  

Syntax is `-p <host-interface>:<host-port>:<target-port>/<protocol>`

# Chapter 6 Isolation
### Limit resources: Memory, CPU, 
- `-m` or `--memory` 
	- number, where unit = b, k, m or g
	- memory limits are not reservations, just caps
- `--cpu-shares` 
	- is a weight you set that is used to calculate % of CPU usage allowed
	- % is calculated as weight / (sum of all weights)
	- only enforced when there is contention for a CPU
- `--cpuset-cpus` : limits process to a specific CPU
	- `docker run -d --cpuset-cpus 0`  Restricts to CPU number 0
	- Can specify a list or `0,1,2` or a range `0-2`
- `--device`
	- mount your webcam:  `docker run --device /dev/video0:/dev/video0`
- Shared memory : Hamel this was too advanced for me

### Running as a user
- You can only inspect the default run-as User by creating or pulling the image
	- see p. 113

- Change run-as user
	- `docker run --user nobody`
	-  **The user has to exist in the image when doing this or you will get an error**.  The user will not be created automatically for you. 
	- See available users:
		- `docker run --rm busybox:latest awk -F: '$0=$1' /etc/passwd`

### Privileged Containers: TRY NOT TO DO THIS
- This is how you run Docker-in-Docker
- Priviliged containers **have root privileges on the host**.  
- `--privilged` on `docker create` or `docker run`



# Chapter 7 packaging software
Aside: cleaning up your docker environment	

`docker image prune -a` and `docker container prune`

### Recovering changes to a stopped container
I always thought you have to commit changes in order to preserve changes to an image you made in a container.  This is not true (although committing changes is a good idea). 

**Any changes you  make to a container is saved even if the container is exited**

To recover changes to a container

1. Find the container (if you didn't name it with `docker run --name` it will be named for you), using `docker ps -a`
2. Start the container using `docker start -ai <container_name>`   the `-ai` flags mean to attach and run interactively
3. Now you are in the container you can verify that everything you installed is still there!

Note: if you run your container initially with `docker run --rm` this automatically removes your container upon exit, so this might not be recommended as your changes are not recoverable if you forget to commit


![](Docker-In-Action/D79BAEDA-4071-4040-8B7B-2B864588FA9E.png)

### Seeing changes to a container from the base image

`docker diff <container name>` will output a long list of of file changes:
		- A: file added
		- D: file deleted
		- C: file changed

### Other tricks

You can override the entry point to the container **permanently** by using the `--entrypoint` flag:  `docker run --entrypoint`

### Understanding Images & Layers
- files are stored in a Union file system, so they are stored in specific layers.  The file system you are seeing as an end user are a union of all the layers.  Each time a change is made to a union file system, that change is recorded on a new layer on top of all of the others. The “union” of all of those layers, or top-down view, is what the container (and user) sees when accessing the file system.
	- This means **if you are not careful you can bloat the file system by making a bunch of unnecessary changes to add/delete files.**
- `docker commit` commits the top-layer changes to an image, meaning all the files changes are saved.

**See image size with**

`docker images`.  Even though you remove a file, the image size will increase!  This is because of the Union File System

**See size of all layers**

`docker history <image name>`

**flatten an image** This is kind of complicated, you can do this by exporting and importing the filesystem into a base image See pg. 140.  BUT there is an experimental feature called `docker build --squash -t <image> .`You can enable experimental features by following these instructions: [dockerd Docker Documentation](https://docs.docker.com/engine/reference/commandline/dockerd/#description). For Mac, you can turn on experimental features by setting `experimental: true` in `settings> Command Line > enable experimental


# Chapter 8 Build Automation
- use `.dockerignore` to prevent certain files from being copied
- You can set multiple environment variables at once in Dockerfile
- You can use environment variables in the `LABEL` command
	- The metadata makes it clear that the environment variable substitution works. You can use this form of substitution in the ENV, ADD, COPY, WORKDIR, VOLUME, EXPOSE, and USER instructions.

```docker
ENV APPROOT "/app" APP "mailer.sh" VERSION "0.6"
LABEL base.name "Mailer Archetype" base.version "${VERSION}"
```

- view metadata using the command `docker inspect <image name>`

### ENTRYPOINT something arugment vs. ENTRYPOINT ["something", "argument"]

**TLDR; use the ugly list approach**

There are two instruction forms **shell form** and **exec form** [docker - Dockerfile CMD shell versus exec form - Stack Overflow](https://stackoverflow.com/questions/42805750/dockerfile-cmd-shell-versus-exec-form)

The ENTRYPOINT instruction has two forms: the shell form and an exec form. The shell form looks like a shell command with whitespace-delimited arguments. The exec form is a string array where the first value is the command to execute and the remaining values are arguments. .

**Most importantly, if the shell form is used for ENTRYPOINT, then all other arguments provided by the CMD instruction or at runtime as extra arguments to docker run will be ignored. This makes the shell form of ENTRYPOINT less flexible.**


Other commands can use the **exec form** too!  You must use the exec form when any of the arguments contain a whitespace:

```docker
FROM dockerinaction/mailer-base:0.6 
COPY ["./log-impl", "${APPROOT}"] 
RUN chmod a+x ${APPROOT}/${APP} && \ chown example:example /var/log 
USER example:example 
VOLUME ["/var/log"]  # each value in this array will be created as a new volume definition
CMD ["/var/log/mailer.log"]
```
Note: you usually don't want to specify a volume at build time.


### CMD vs. ENTRYPOINT (You should really try to always use both!)

CMD is actually an argument list for the `ENTRYPOINT`.  

- Logically when you run a container it runs as `<default shell program> ENTRYPOINT CMD`
- You can override the `ENTRYPOINT` with `docker run --entrypoint`, and you can override commands by just passing commands to docker run :  `docker run <image name> <command>`

```docker
FROM ubuntu

ENTRYPOINT [ "ls" ]
CMD ["-lah"]
```  

As you can see using ENTRYPOINT as well as CMD separately provides your downstream users with the most flexibility.

### COPY vs ADD

Use COPY.  ADD has additional functionality like ability to download from urls and decompress files, which proved opaque over time and you shouldn't use it.

### ONBUILD

The ONBUILD instruction defines instructions to execute if the resulting image is used as a base for another build.  those ONBUILD instructions are executed after the FROM instruction and before the next instruction in a Dockerfile.

```docker
FROM busybox:latest 
WORKDIR /app RUN touch /app/base-evidence 
ONBUILD RUN ls -al /app
```

### Other Stuff
- You should always validate the presence of required environment variables in a startup shell script like `entrypoint.sh`

### Docker Digests
Reference the exact SHA of a Container which is the only way to guarantee the image you are referencing has not changed.   @ symbol followed by the digest. 

Hamel: doesn't look like a good way to find history of digests, but you can see the current SHA when you use `docker pull` , you can see the SHA as well if you call `docker images --digests`

```docker
FROM debian@sha256:d5e87cfcb730...
```


# Chapter 10 (skipped Ch 9)
- You can run your own customized registry.  Simplest version can be hosted from a Docker Container!

```bash
# start a local registry on port 5000
docker run -d --name personal_registry
 \ -p 5000:5000 --restart=always 
 \ registry:2

# push an image to the registry (using the same image that created the registry for convenience)
docker tag registry:2 localhost:5000/distribution:2 
docker push localhost:5000/distribution:2
```

Note that `docker push` syntax is actually `docker push <registry url>/org/repo`

This chapter discusses many more things which are skipped:
	- Centralized registries
	- Enhancements
	- Durable blog storage
	- Integrating through notifications

# Chapter 11 Docker Compose
Docker compose for fastpages:

```yaml
version: "3"
services:
  fastpages: &fastpages
    working_dir: /data
    environment:
        - INPUT_BOOL_SAVE_MARKDOWN=false
    build:
      context: ./_action_files
      dockerfile: ./Dockerfile
    image: fastpages-dev
    logging:
      driver: json-file
      options:
        max-size: 50m
    stdin_open: true
    tty: true
    volumes:
      - .:/data/

  converter:
    <<: *fastpages
    command: /fastpages/action_entrypoint.sh

  watcher:
    <<: *fastpages
    command: watchmedo shell-command --command /fastpages/action_entrypoint.sh --pattern *.ipynb --recursive --drop

  jekyll:
    working_dir: /data
    image: hamelsmu/fastpages-jekyll
    restart: unless-stopped
    ports:
      - "4000:4000"
    volumes:
      - .:/data/
    command: >
     bash -c "gem install bundler
     && jekyll serve --trace --strict_front_matter"

```

The above uses YAML anchors: [YAML anchors - Atlassian Documentation](https://confluence.atlassian.com/bitbucket/yaml-anchors-960154027.html)

Start a particular service: `docker-compose up <service name>`
Rebuild a service `docker-compose build <service name>`

You can express dependencies with `depends_on` which is useful for compose to know which services to restart or start in a specified order. 

See examples of Docker Compose files on p 243

### Scaling Up w/Docker Compose
That's right you don't need docker swarm.  This example uses [ch11_coffee_api/docker-compose.yml at master · dockerinaction/ch11_coffee_api · GitHub](https://github.com/dockerinaction/ch11_coffee_api/blob/master/docker-compose.yml)

1. Get  list of containers that are currently providing the service.  

`docker-compose ps coffee`

```
          Name                 Command       State            Ports
----------------------------------------------------------------------------
ch11_coffee_api_coffee_1   ./entrypoint.sh   Up      0.0.0.0:32768->3000/tcp
```

2. Scale it up with `docker-compose up --scale`

`docker-compose up --scale coffee=5`

When you run `docker-compose ps coffee`: 
```
docker-compose ps coffee                                                                                                                         ✔
          Name                 Command       State            Ports
----------------------------------------------------------------------------
ch11_coffee_api_coffee_1   ./entrypoint.sh   Up      0.0.0.0:32768->3000/tcp
ch11_coffee_api_coffee_2   ./entrypoint.sh   Up      0.0.0.0:32769->3000/tcp
ch11_coffee_api_coffee_3   ./entrypoint.sh   Up      0.0.0.0:32771->3000/tcp
ch11_coffee_api_coffee_4   ./entrypoint.sh   Up      0.0.0.0:32770->3000/tcp
ch11_coffee_api_coffee_5   ./entrypoint.sh   Up      0.0.0.0:32772->3000/tcp
```

Note that the coffee service binds to port `0` on your host, which is an **ephemeral port**, which just means that your host machine assigns the service to a random port.  This is required if you plan on using `docker compose up --scale`

The service was bound to port 0 on the host with 

```yaml
coffee:
  build: ./coffee
  user: 777:777
  restart: always
  expose:
    - 3000
  ports:
    - "0:3000"
...
```

3. Load balancer

Problem with this kind of scaling is you don't know the ports in advance , and you don't want to hit these individual endpoints, you need a load balancer.  This [blog post](https://pspdfkit.com/blog/2018/how-to-use-docker-compose-to-run-multiple-instances-of-a-service-in-development/#adding-a-load-balancer) shows you how to luse NGINX as a load balancer.

You will need something like this in your compose file

```yaml
  nginx:
    image: nginx:latest
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
    depends_on:
      - pspdfkit
    ports:
      - "4000:4000"
```

### Templating Docker Compose Files
You can read about this here: [Share Compose configurations between files and projects | Docker Documentation](https://docs.docker.com/compose/extends/), allows you to override certain things from a base compose file. 


# Chapter 12 Clusters w/Machine & Swarm
Hamel: I skipped this completely