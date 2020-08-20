# Show-Itself
![Docker Cloud Automated build](https://img.shields.io/docker/cloud/automated/ibjsw/show-itself)
![build](https://github.com/ByoungJoonIm/Show-Itself/workflows/build/badge.svg?branch=master)
![GitHub](https://img.shields.io/github/license/byoungjoonim/Show-Itself)

## What is this project?
- This is web project for describing itself including what technologies used and how can I handle that.
- Also it used hot techniques such as REST-API and HATEOAS.
- Simply visit [here](http://bjdev.site).

## Document
- I hope to give you good document. Currently you can refer to as follow.
  - [Rest API spec](https://github.com/ByoungJoonIm/Show-Itself/blob/master/docs/RestAPI.md)
  - [Release note](https://github.com/ByoungJoonIm/Show-Itself/blob/master/docs/ReleaseNote.md)

## How can I start it?
### Using docker(recommended)
```
docker pull ibjsw/show-itself:release-v0.0.2
docker run -it -d --name web -p 80:80 ibjsw/show-itself:release-v0.0.2
```
- If you meet docker pull error, see [here](https://hub.docker.com/repository/registry-1.docker.io/ibjsw/show-itself/tags?page=1)

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


## Why this site was maded?
```
One day after graduating, I noticed that I don't know current technologies such as
spring, react and so on. I studied basic computer theories like OS and DB only.
So I decided to test myself by learning new things.
Almost technologies which used this project is not friendly at this time,
But I hope to would be best practice.
I have refered to offical site for each technology and technique.
```
