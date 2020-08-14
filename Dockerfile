FROM ubuntu:latest
WORKDIR /root
COPY entrypoint.sh run.sh
RUN chmod 700 run.sh
ENV DEBIAN_FRONTEND=noninteractive

ENTRYPOINT ["./run.sh"]
