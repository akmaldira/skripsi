FROM golang:alpine
WORKDIR /go/src/app
COPY . .
ARG GIN_MODE=debug
ENV GIN_MODE=${GIN_MODE}
RUN go build -o main main.go

EXPOSE 6000
CMD ["./main"]