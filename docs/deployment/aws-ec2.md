# Deployment: GitHub Actions to AWS EC2

Every push to `main` is typechecked, built into a Docker image, pushed to GitHub Container Registry (private) and deployed to the EC2 server on port 80. Pull requests to `main` run the typecheck only.

Workflow: [.github/workflows/deploy.yml](../../.github/workflows/deploy.yml). Server script: [scripts/deploy/remote-deploy.sh](../../scripts/deploy/remote-deploy.sh).

## Pipeline

| Job | Runs on | What it does |
|---|---|---|
| Typecheck | every push and PR to `main` | `npm ci`, `npm run typecheck` |
| Build and push image | push to `main`, manual run | Builds the `runner` stage of the Dockerfile, pushes `ghcr.io/prasa7/digitizwork-website:<short-sha>` |
| Deploy to EC2 | push to `main`, manual run | Copies the script over SSH, installs Docker if missing, pulls the image, restarts the `digitizwork-web` container, checks `http://EC2_HOST/` returns 200 |

The image is built on GitHub's runners, so the t3.micro server never runs a build.

## One-time setup

### AWS (EC2 security group)
Inbound rules on the instance's security group:

| Type | Port | Source | Why |
|---|---|---|---|
| SSH | 22 | `0.0.0.0/0` | GitHub runners have changing IPs. Login is key-only. |
| HTTP | 80 | `0.0.0.0/0` | Website |
| HTTPS | 443 | `0.0.0.0/0` | Website (once a domain and HTTPS are added) |

Recommended: attach an Elastic IP so the address does not change when the instance stops and starts.

### GitHub environment settings
Settings → Environments → `EC2_HOST` (the deploy job runs in this environment):

| Kind | Name | Value |
|---|---|---|
| Variable | `EC2_HOST` | Public IPv4 address (or Elastic IP) of the instance |
| Variable | `EC2_USER` | `ubuntu` |
| Secret | `EC2_SSH_KEY` | Full contents of the `.pem` key file, including the BEGIN/END lines |

Never commit the `.pem` file or paste it anywhere else.

## Deploying
- Automatic: merge or push to `main`.
- Manual: Actions → "CI / Deploy" → Run workflow → `main`.
- Each run shows the image tag (commit) that was deployed. Reference the Jira key in commit messages for traceability.

## Rolling back
Re-run an earlier successful workflow run (Actions → run → "Re-run all jobs"), or revert the commit on `main` and push.

## Troubleshooting
| Symptom | Likely cause |
|---|---|
| "EC2_HOST variable is not set" | Values must be in the `EC2_HOST` environment (Settings → Environments), not elsewhere |
| `ssh: connect to host ... timed out` | Port 22 not open to `0.0.0.0/0`, or wrong `EC2_HOST` |
| `Permission denied (publickey)` | `EC2_SSH_KEY` is not the instance's key, or `EC2_USER` is not `ubuntu` |
| `denied` when pulling the image | The workflow token lacks package access: Package settings → Manage Actions access → add this repository (read) |
| Health check fails | `sudo docker logs digitizwork-web` on the server |
