# Download Files

***

## Linux (Bash)

### Create Directory

```bash
mkdir -p /var/www/trexzactyl
cd /var/www/trexzactyl
```

### Download & Extract

```bash
curl -Lo panel.tar.gz https://github.com/trexzactyl/trexzactyl/releases/latest/download/panel.tar.gz
tar -xzvf panel.tar.gz
chmod -R 755 storage/* bootstrap/cache/
```

***

## Windows (PowerShell)

### Create Directory

```powershell
New-Item -Path "C:\trexzactyl" -ItemType Directory
Set-Location -Path "C:\trexzactyl"
```

### Download & Extract

```powershell
Invoke-WebRequest -Uri "https://github.com/trexzactyl/trexzactyl/releases/latest/download/panel.tar.gz" -OutFile "panel.tar.gz"
tar -xzvf panel.tar.gz
# No chmod needed on Windows, but ensure the webserver user has write access to storage and bootstrap/cache
icacls storage /grant "IIS_IUSRS:(OI)(CI)F" /T
icacls bootstrap/cache /grant "IIS_IUSRS:(OI)(CI)F" /T
```

