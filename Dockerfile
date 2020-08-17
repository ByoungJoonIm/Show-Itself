FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
EXPOSE 80/tcp

RUN apt-get update 
RUN apt-get install openjdk-8-jdk git -y
WORKDIR /root
RUN git clone https://github.com/ByoungJoonIm/Show-Itself
WORKDIR /root/Show-Itself
RUN git checkout origin/dev

ENTRYPOINT ["bash", "entrypoint.sh"]
