# Queue Workers

***

## Linux (Bash)

### 1. Crontab

Open your crontab using `sudo crontab -e` and paste the line below:

```bash
* * * * * php /var/www/trexzactyl/artisan schedule:run >> /dev/null 2>&1
```

### 2. Systemd Queue Worker

Create a file called `trexzactyl.service` in `/etc/systemd/system`:

```ini
[Unit]
Description=Trexzactyl Queue Worker

[Service]
User=www-data
Group=www-data
Restart=always
ExecStart=/usr/bin/php /var/www/trexzactyl/artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
StartLimitInterval=180
StartLimitBurst=30
RestartSec=5s

[Install]
WantedBy=multi-user.target
```

### 3. Enable Service

```bash
sudo systemctl enable --now trexzactyl.service
sudo systemctl enable --now redis-server
```

***

## Windows (PowerShell)

### 1. Task Scheduler (Cron Substitute)

To run the schedule every minute on Windows, use **Task Scheduler** or the CLI:

```powershell
$action = New-ScheduledTaskAction -Execute "php.exe" -Argument "C:\trexzactyl\artisan schedule:run"
$trigger = New-ScheduledTaskTrigger -Once -At (Get-Date) -RepetitionInterval (New-TimeSpan -Minutes 1)
Register-ScheduledTask -TaskName "Trexzactyl Schedule" -Action $action -Trigger $trigger -User "SYSTEM"
```

### 2. Manual Queue Worker

On Windows, you can run the queue worker in a dedicated PowerShell window or use a service manager like **NSSM**:

```powershell
php artisan queue:work --queue=high,standard,low --sleep=3 --tries=3
```

### 3. Using NSSM (Recommended for Production)

1. Download **NSSM** (Non-Sucking Service Manager).
2. Run `nssm install TrexzactylQueue`.
3. Set Path to `php.exe`.
4. Set Startup directory to `C:\trexzactyl`.
5. Set Arguments to `artisan queue:work`.

