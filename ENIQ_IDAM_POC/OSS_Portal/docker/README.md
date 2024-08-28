# Dockerfile for building eric-adp-gui-aggregator-service

For more info check [Docker chapter](../docs/development/docker.md) in documentation.

## Build

Run the following command from the repository root directory:

```bash
docker build -t eric-adp-gui-aggregator-service -f docker/Dockerfile .
```

Start the image with specified port:

```bash
docker run -d -p 8080:3000 eric-adp-gui-aggregator-service
```
