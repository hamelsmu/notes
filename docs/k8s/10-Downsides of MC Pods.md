MC = multi container

Adding sidecars and init containers adds to the failure modes for your application.

You might see ready = 0 if there is a container in a multi-container pod that is failing! 

# Restart Conditions

1. If a Pod with init containers is replaced, then the new Pod runs all the init containers again. You must ensure your init logic can be run repeatedly.
2. If you deploy a change to the init container image(s) for a Pod, that restarts the Pod. Init containers all execute again, and app containers are replaced.
3. If you deploy a Pod spec change to the app container image(s), the app containers are replaced, but the init containers are not executed again.
4. If an application container exits, then the Pod re-creates it. Until the container is replaced, the Pod is not fully running and won’t receive Service traffic.

