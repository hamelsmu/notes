

docs: .FORCE
	yarn start

build: .FORCE
	yarn build

deploy: .FORCE
	GIT_USER=hamelsmu yarn deploy

.FORCE:
