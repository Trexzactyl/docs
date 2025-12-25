# Environment Setup

***

## Linux (Bash)

### 1. Create configuration file

```bash
cp .env.example .env
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
```

### 2. Configure Panel Settings

```bash
php artisan p:environment:setup
php artisan p:environment:database
php artisan p:environment:mail
```

### 3. Database Migration & Admin User

```bash
php artisan migrate --seed --force
php artisan p:user:make
```

### 4. Set Permissions

```bash
# Ubuntu/Debian
chown -R www-data:www-data /var/www/trexzactyl/*

# CentOS (Nginx)
chown -R nginx:nginx /var/www/trexzactyl/*
```

***

## Windows (PowerShell)

### 1. Create configuration file

```powershell
Copy-Item .env.example .env
composer install --no-dev --optimize-autoloader
php artisan key:generate --force
```

### 2. Configure Panel Settings

```powershell
php artisan p:environment:setup
php artisan p:environment:database
php artisan p:environment:mail
```

### 3. Database Migration & Admin User

```powershell
php artisan migrate --seed --force
php artisan p:user:make
```

### 4. Set Permissions

```powershell
# Grant IIS or your user full control over the folder
icacls . /grant "IIS_IUSRS:(OI)(CI)F" /T
```

