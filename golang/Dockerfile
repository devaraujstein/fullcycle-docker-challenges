FROM ubuntu:latest AS builder

WORKDIR /usr/src/app

COPY hellorocks.go /usr/src/app

RUN apt-get update && \
    apt-get install wget -y

ENV DOWNLOADS_PATH=/usr/local/downloads

RUN rm -rf /usr/local/go && \
    mkdir $DOWNLOADS_PATH && \
    wget https://go.dev/dl/go1.19.linux-amd64.tar.gz -P $DOWNLOADS_PATH && \
    tar -xzf $DOWNLOADS_PATH/go1.19.linux-amd64.tar.gz -C /usr/local && \
    rm $DOWNLOADS_PATH/go1.19.linux-amd64.tar.gz

ENV PATH=$PATH:/usr/local/go/bin

RUN export PATH=$PATH && \
    go mod init hellorocks && \
    go build -o build/hellorocks

FROM scratch

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/build .

ENTRYPOINT [ "./hellorocks" ]