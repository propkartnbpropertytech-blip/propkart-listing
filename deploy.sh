#!/bin/sh
set -e

echo ">>> Starting propkart-listing container with Traefik integration..."
docker rm -f propkart-listing 2>/dev/null || true

docker run -d \
  --name propkart-listing \
  --restart unless-stopped \
  --network propconnect-network \
  -v /root/propconnect-stack/nginx-listing.conf:/etc/nginx/conf.d/default.conf:ro \
  -v /root/propconnect-stack/listing-dist:/usr/share/nginx/html:ro \
  -l "traefik.enable=true" \
  -l "traefik.http.routers.propkart-listing-live.rule=Host(\`listing.nbpropertytech.com\`)" \
  -l "traefik.http.routers.propkart-listing-live.entrypoints=websecure" \
  -l "traefik.http.routers.propkart-listing-live.tls=true" \
  -l "traefik.http.routers.propkart-listing-live.tls.certresolver=letsencrypt" \
  -l "traefik.http.services.propkart-listing-live.loadbalancer.server.port=80" \
  nginx:alpine

echo ">>> propkart-listing container started successfully!"
