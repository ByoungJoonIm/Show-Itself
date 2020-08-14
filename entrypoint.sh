#!/bin/bash

apt update
apt install git openjdk-8-jdk nodejs npm -y
git clone https://github.com/ByoungJoonIm/Show-Itself
cd Show-Itself
chmod 700 gradlew
#./gradlew webpack
#./gradlew build
#java -jar build/libs/ShowItSelf-0.0.1-SNAPSHOT.jar
