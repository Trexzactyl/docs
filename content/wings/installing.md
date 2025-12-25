# Installing Wings

***

## Supported Systems

Trexzactyl Wings is designed to run on modern Linux distributions. We officially support and recommend:

- **Ubuntu 22.04 / 24.04** (Recommended)
- **Debian 11 / 12**
- **CentOS 8 / 9** (Rocky Linux, AlmaLinux)

While Wings may work on other distributions, these are the ones we test and optimize for.

## System Requirements

To run Wings, you will need a Linux system capable of running Docker containers. Most VPS and dedicated servers are compatible.

> **Warning:**
> If your provider uses **Virtuozzo**, **OpenVZ**, or **LXC** virtualization, you will likely be unable to run Wings due to lack of nested virtualization support for Docker. KVM is guaranteed to work.

To check your virtualization environment, run:
```bash
systemd-detect-virt
```
If the result is `none`, `kvm`, or `vmware`, you are good to go.

## Dependencies

Wings requires the following dependencies:
- **curl**
- **Docker**

### Installing Docker

For a quick install of Docker, you can use the official script:

```bash
curl -sSL https://get.docker.com/ | CHANNEL=stable bash
```

Ensure Docker starts on boot:

```bash
sudo systemctl enable --now docker
```

## Installing Wings

The first step is to create the required directory structure and download the Wings executable.

```bash
sudo mkdir -p /etc/trexzactyl
curl -L -o /usr/local/bin/wings "https://github.com/trexzactyl/wings/releases/latest/download/wings_linux_$([[ "$(uname -m)" == "x86_64" ]] && echo "amd64" || echo "arm64")"
sudo chmod u+x /usr/local/bin/wings
```
