# Install Dependencies
You'll need to install the following dependencies in order to run and use Trexzactyl:

***

- **PHP 8.1+** (cli, openssl, gd, mysql, PDO, mbstring, tokenizer, bcmath, xml, curl, zip, fpm)
- **MariaDB 10.2+** or **MySQL 5.7+**
- **Redis Server**
- **Webserver** (NGINX preferred)
- **Composer v2**
- **curl, tar, unzip, git**

## Linux (Ubuntu/Debian)

> **Note:** These commands are specific to Ubuntu/Debian based systems.

```bash
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg lsb-release

LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# redis.io repo
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# MariaDB repo setup
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash

apt update
apt -y install php8.1 php8.1-{cli,gd,mysql,pdo,mbstring,tokenizer,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

## Windows (PowerShell)

For Windows, we recommend using a standard environment like **XAMPP** for local development or installing individual binaries for production.

### Using Chocolatey (Recommended)

If you have [Chocolatey](https://chocolatey.org/) installed, you can quickly install the requirements:

```powershell
choco install php --version=8.1.0
choco install mariadb
choco install redis-64
choco install git
choco install composer
choco install openssl
```

### Manual Installation
1. Download **PHP 8.1** from [windows.php.net](https://windows.php.net/download/).
2. Download **MariaDB** from [mariadb.org](https://mariadb.org/download/).
3. Download **Composer** from [getcomposer.org](https://getcomposer.org/doc/00-intro.md#installation-windows).
4. Ensure all binaries are added to your System PATH.

