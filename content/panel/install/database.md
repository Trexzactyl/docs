# Database Setup
***
In order for the Panel to get and set data, we'll need a database. This is where all the information about the Panel is stored.

## MySQL / MariaDB Setup

The SQL commands below are identical for both Linux and Windows.

### 1. Access the Database CLI

**On Linux:**
```bash
sudo mysql -u root -p
```

**On Windows (PowerShell):**
```powershell
mysql.exe -u root -p
```

### 2. Create User and Database

```sql
# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'trexzactyl'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE panel;
GRANT ALL PRIVILEGES ON panel.* TO 'trexzactyl'@'127.0.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES;
EXIT;
```

