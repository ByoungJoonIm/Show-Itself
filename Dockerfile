FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
EXPOSE 80/tcp

RUN apt update 
RUN apt install nodejs npm openjdk-8-jdk git -y
WORKDIR /root
RUN git clone https://github.com/ByoungJoonIm/Show-Itself
