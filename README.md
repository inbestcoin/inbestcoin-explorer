## About inbestcoin

inbestcoin is a cryptocurrency focused on providing a decentralized mechanism of exchange, and anonymity via untraceable and unlinkable transactions.

You can read more about it at https://coin.inbest.cloud

## About inbestcoin-explorer

This in an experimental block explorer for inbestcoin.

## Installation on Ubuntu 16.04
1) Configure your webserver:

```bash
sudo apt-get install apache2
sudo apt-get install php libapache2-mod-php php-mcrypt php-curl
sudo a2enmod headers
sudo vim /etc/apache2/sites-available/explorer.coin.inbest.cloud.conf

  <VirtualHost *:80>
      ServerAdmin webmaster@explorer.coin.inbest.cloud
      ServerName explorer.coin.inbest.cloud
      ServerAlias www.explorer.coin.inbest.cloud
      DocumentRoot /var/www/explorer.coin.inbest.cloud/public_html/
      ErrorLog /var/www/explorer.coin.inbest.cloud/logs/error.log
      CustomLog /var/www/explorer.coin.inbest.cloud/logs/access.log combined
      <Directory /var/www/explorer.coin.inbest.cloud/public_html/>
        Options FollowSymLinks
        AllowOverride All
        Require all granted
      </Directory>
  </VirtualHost>

sudo mkdir -p /var/www/explorer.coin.inbest.cloud/public_html
sudo mkdir -p /var/www/explorer.coin.inbest.cloud/logs
sudo touch /var/www/explorer.coin.inbest.cloud/logs/error.log
sudo touch /var/www/explorer.coin.inbest.cloud/logs/access.log
sudo a2ensite explorer.coin.inbest.cloud
sudo service apache2 reload
```

2) Run inbestcoind as follows:
```bash
./inbestcoind --enable-cors=* --enable_blockexplorer --rpc-bind-ip=0.0.0.0 --rpc-bind-port=27175
```
3) Upload the to your website and change `api` variable in `config.js` to point to your daemon.

## Community and support

You can find us at:

[Telegram](https://t.me/inbestcoin)

## License

inbestcoin-explorer is licensed under the GNU Lesser General Public License v3.0

## Credits

Partially based on https://github.com/Karbovanets/Karbowanec-Blockchain-Explorer
