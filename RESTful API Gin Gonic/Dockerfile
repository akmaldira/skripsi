FROM golang:alpine
WORKDIR /go/src/app
COPY . .
ARG GIN_MODE=release
ENV GIN_MODE=${GIN_MODE}
RUN go build -o main main.go

EXPOSE 6000
CMD ["./main"]