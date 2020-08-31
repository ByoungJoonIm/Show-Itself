#!/bin/bash

GIT_PATH=$HOME/Show-Itself
GIT_NGINX_CONF_PATH=$GIT_PATH/nginx
GIT_NGINX_STATIC_PATH=$GIT_PATH/public

NGINX_CONF_PATH=/etc/nginx/conf.d
NGINX_STATIC_PATH=/static/public
WEB_IMAGE_NAME=ibjsw/show-itself:release-`git describe --tags`

docker network create deployment

docker run -it -d --network deployment --name web $WEB_IMAGE_NAME
docker run -it -d \
	--network deployment \
	--name nginx \
	-p 80:80 \
	-p 443:443 \
	-v $GIT_NGINX_STATIC_PATH:$NGINX_STATIC_PATH \
	-v $GIT_NGINX_CONF_PATH:$NGINX_CONF_PATH \
	nginx
