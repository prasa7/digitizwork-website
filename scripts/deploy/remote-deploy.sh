#!/usr/bin/env bash
# Runs on the EC2 server. Called by .github/workflows/deploy.yml.
# Usage: echo "$REGISTRY_TOKEN" | bash remote-deploy.sh <image:tag> <registry-user>
set -euo pipefail

IMAGE="$1"
REGISTRY_USER="$2"
NAME=digitizwork-web

if ! command -v docker >/dev/null 2>&1; then
  echo "Installing Docker..."
  curl -fsSL https://get.docker.com | sudo sh
fi

# Token arrives on stdin so it never appears in process arguments.
sudo docker login ghcr.io -u "$REGISTRY_USER" --password-stdin
sudo docker pull "$IMAGE"
sudo docker logout ghcr.io

sudo docker rm -f "$NAME" 2>/dev/null || true
sudo docker run -d --name "$NAME" --restart unless-stopped -p 80:3000 "$IMAGE"

# Keep the current image, drop older ones to save disk space.
sudo docker image prune -af --filter "until=72h" >/dev/null || true
rm -f /tmp/remote-deploy.sh
echo "Deployed $IMAGE"
