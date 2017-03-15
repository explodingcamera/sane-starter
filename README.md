# A starter I use for most of my Projects
I don't use something like react-create-app because every project I do has different special requirements anyways.

Things you need to change: App name in package.json, nginx.conf line 59-62

Features:
* mobx + react
* postcss
* Continues Deployment using Docker/Travis
* Code Splitting using react-router 4

Travis env vars:

* $DOCKER_USERNAME
* $DOCKER_PASSWORD
* $DOCKER_REPO
