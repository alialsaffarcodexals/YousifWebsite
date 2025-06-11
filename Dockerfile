# Build stage
FROM golang:1.23-alpine AS build
WORKDIR /app
COPY . .
RUN go build -o server main.go

# Final stage
FROM alpine:latest
WORKDIR /app
COPY --from=build /app/server .
COPY --from=build /app/index.html ./
COPY --from=build /app/login.html ./
COPY --from=build /app/css ./css
COPY --from=build /app/js ./js
COPY --from=build /app/videos ./videos
COPY --from=build /app/images ./images
COPY --from=build /app/accounts ./accounts
COPY --from=build /app/diaries ./diaries
COPY --from=build /app/favorites ./favorites
COPY --from=build /app/friends ./friends
EXPOSE 1234
CMD ["/app/server"]
