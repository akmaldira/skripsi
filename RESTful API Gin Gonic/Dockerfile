FROM golang:1.20

WORKDIR /go/src/app

COPY . .

ARG GIN_MODE=release
ENV GIN_MODE=${GIN_MODE}

RUN go build -o main main.go

CMD ["./main"]