FROM ubuntu:latest
WORKDIR /root
COPY entrypoint.sh run.sh
RUN chmod 700 run.sh
ENV DEBIAN_FRONTEND=noninteractive
EXPOSE 80/tcp

ENTRYPOINT ["./run.sh"]
