#!/bin/bash

# This file located at home directory.
LOG=$HOME/update.log

# Get old image name from running container.
OLD_IMAGE=`docker inspect --format='{{.Config.Image}}' web`

# Get new image name from git latest release tag.
cd $HOME/Show-Itself
git pull
NEW_IMAGE=ibjsw/show-itself:release-`git describe --tags`
cd ..

echo $OLD_IMAGE
echo $NEW_IMAGE

if [ "$OLD_IMAGE" = "$NEW_IMAGE" ]; then
        echo "Already updated!"
else
        echo "start docker pulling..."
        docker pull $NEW_IMAGE >> $LOG
        echo "docker stop and rm"
        docker stop web >> $LOG
        docker rm web >> $LOG
        echo "docker running..."
        docker run -it -d -p 80:80 --name web $NEW_IMAGE >> $LOG
        echo "docker rmi..."
        docker rmi $OLD_IMAGE >> $LOG
        echo "complete!"
        echo "------------------------------------------------------" >> $LOG
fi

