# Accept payments with PayPal

***

This guide will show you how to easily get started with using PayPal with Trexzactyl
in order to process credit purchases.

> **Note:** This system was implemented in `v1.1.0`. Please make sure you're running this version
or newer in order to use the PayPal system.

***

### Obtain Client ID and Client Secret

You'll need to firstly create a new 'App' with PayPal in order to get a Client ID and secret
for use with Trexzactyl.

***

### 1. Log into the PayPal Developer Console
![image](https://www.knowband.com/blog/wp-content/uploads/2019/02/Paypal-login-PayPal-client-Id.png)
![image](https://www.knowband.com/blog/wp-content/uploads/2019/02/2.gif)

### 2. Head to the dashboard and create a new App
> **Note:** Make sure that the toggle at the top of the page is set to LIVE mode, not Sandbox.

![image](https://www.knowband.com/blog/wp-content/uploads/2019/02/5.png)

### 3. Create your PayPal App
![image](https://www.knowband.com/blog/wp-content/uploads/2019/02/6.png)

### 4. Obtain Client ID and Secret
![image](https://www.knowband.com/blog/wp-content/uploads/2019/02/2021-04-21.gif)

***

### 5. Add Client ID and Secret to Trexzactyl
Next, you'll need to place these keys in your `.env` file in order to allow Trexzactyl to login.

```bash
cd /var/www/trexzactyl
nano .env

# Fill in the fields PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET
```

### 6. Enable the PayPal gateway in settings

> **Tip:** Make sure the 'PayPal enabled' setting is set to `Enabled`.

![image](/images/store_admin.png)

### 7. Test your configuration

Head over to the Trexzactyl Storefront and click the 'Balance' tab. Once you're there, attempt to buy `x` credits with PayPal.
If the page redirects to a PayPal purchase portal, congrats! You've successfully set up and configured PayPal.

> **Tip:** If you run into issues while getting started with PayPal, let us know in the [Trexzactyl Discord](https://discord.gg/trexzactyl)

