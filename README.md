# Show-Itself ![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/ibjsw/show-itself) ![build](https://github.com/ByoungJoonIm/Show-Itself/workflows/build/badge.svg?branch=master) ![GitHub](https://img.shields.io/github/license/byoungjoonim/Show-Itself) ![GitHub release (latest by date)](https://img.shields.io/github/v/release/byoungjoonim/Show-Itself)

## What is this project?
- This is web project for describing itself including what technologies used and how can I have handled that.
- Also it used hot techniques such as REST-API and HATEOAS.
- Simply visit [here](http://bjdev.site) to see it.

## Document
- Asciidoc is available now!
- see [here](http://bjdev.site/docs)

## How can I start it?
### Using docker(recommended)
```
docker pull ibjsw/show-itself:release-v0.0.2
docker run -it -d --name web -p 80:80 ibjsw/show-itself:release-v0.0.2
```
- Change release version to latest. Latest version is ![GitHub release (latest by date)](https://img.shields.io/github/v/release/byoungjoonim/Show-Itself)
- If you meet docker pull error, see [docker repo](https://hub.docker.com/repository/registry-1.docker.io/ibjsw/show-itself/tags?page=1)
- Tag version and docker release image version are always same.

### Using git(bleeding edge)
- requirement
```
apt-get install openjdk-8-jdk git -y
```
- execute jar
```
cd ~
git clone https://github.com/ByoungJoonIm/Show-Itself
cd Show-Itself
bash entrypoint.sh
```

## Note
- This project is stopped temporarily. It will restart after recruitment season.

## Let me know
- If something is wrong, let me know or just pull request.
