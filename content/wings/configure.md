# Configuring Wings

***

## Linux (Bash)

### 1. Configure

Paste your node configuration into `/etc/trexzactyl/config.yml`.

### 2. Daemonize (systemd)

Create `/etc/systemd/system/wings.service`:

```ini
[Unit]
Description=Trexzactyl Wings Daemon
After=docker.service
Requires=docker.service
PartOf=docker.service

[Service]
User=root
WorkingDirectory=/etc/trexzactyl
LimitNOFILE=4096
PIDFile=/var/run/wings/daemon.pid
ExecStart=/usr/local/bin/wings
Restart=on-failure
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

```bash
sudo systemctl enable --now wings
```

***

## Windows (PowerShell)

### 1. Configure

Paste your node configuration into `C:\trexzactyl\config.yml`.

### 2. Running Wings

You can run Wings directly in a PowerShell window:

```powershell
Set-Location -Path "C:\trexzactyl"
.\wings.exe --debug
```

### 3. Daemonize (NSSM)

To run Wings as a service on Windows, use **NSSM**:

1. Run `nssm install TrexzactylWings`.
2. Set Path to `C:\trexzactyl\wings.exe`.
3. Set Startup directory to `C:\trexzactyl`.
