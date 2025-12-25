# Configuring Wings

***

## Configure

Once you have installed Wings, you need to link it to your Trexzactyl Panel.

1. Go to your Panel's Administrative view.
2. Select **Nodes** from the sidebar and click **Create New**.
3. After creating the node, click the **Configuration** tab.
4. Copy the code block content and paste it into a new file on your node: `/etc/trexzactyl/config.yml`.

Alternatively, use the **Generate Token** button to get a auto-configuration command.

> **Important:**
> When your Panel is using SSL, Wings **must** also have a valid SSL certificate for its FQDN.

## Starting Wings

To start Wings in debug mode and verify everything is working:

```bash
sudo wings --debug
```

Once confirmed, stop it with `CTRL+C` and proceed to daemonize it.

## Daemonizing (using systemd)

Create a systemd service file at `/etc/systemd/system/wings.service`:

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

Reload systemd and start Wings:

```bash
sudo systemctl enable --now wings
```
