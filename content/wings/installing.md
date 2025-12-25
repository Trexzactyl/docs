# Installing Wings

***

## Linux (Bash)

### 1. System Requirements & Dependencies

Wings requires a Linux system with Docker support. Curl is also required.

```bash
# Install Docker
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
sudo systemctl enable --now docker
```

### 2. Install Wings

```bash
sudo mkdir -p /etc/trexzactyl
curl -L -o /usr/local/bin/wings "https://github.com/trexzactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
sudo chmod u+x /usr/local/bin/wings
```

***

## Windows (PowerShell)

### 1. System Requirements

To run Wings on Windows, you must have **Docker Desktop** installed and configured to use **Linux Containers**.

- Download **Docker Desktop** from [docker.com](https://www.docker.com/products/docker-desktop/).
- Ensure **WSL 2** is enabled on your system.

### 2. Install Wings

Wings for Windows can be run as a standalone binary within a PowerShell terminal or as a service.

```powershell
New-Item -Path "C:\trexzactyl" -ItemType Directory
Invoke-WebRequest -Uri "https://github.com/trexzactyl/wings/releases/latest/download/wings_windows_amd64.exe" -OutFile "C:\trexzactyl\wings.exe"
```

> **Note:** Currently, Wings is primarily optimized for Linux. Running it on Windows is recommended for development/testing purposes via Docker Desktop.
