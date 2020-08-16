FROM ubuntu:latest
ENV DEBIAN_FRONTEND=noninteractive
EXPOSE 80/tcp

RUN apt-get update 
RUN apt-get install nodejs npm openjdk-8-jdk git -y
WORKDIR /root
RUN git clone https://github.com/ByoungJoonIm/Show-Itself
RUN git checkout dev
COPY entrypoint.sh entrypoint.sh
WORKDIR /root/Show-Itself
RUN bash gradlew webpack
RUN bash gradlew build

ENTRYPOINT ["bash", "entrypoint.sh"]
