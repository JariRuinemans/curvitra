Curviation
=========

A web multiplayer Tron game like with curves

## Installation

### Get the repo
git clone https://github.com/JariRuinemans/curvitra.git

cd Curviation

### Install dependencies
sudo apt-get install npm

sudo npm install -g bower

sudo npm install -g gulp

sudo apt-get install node

sudo apt-get install nodejs-legacy

curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -

sudo apt-get install -y nodejs

sudo apt-get install -y build-essential

curl -L git.io/nodebrew | perl - setup

export PATH=$HOME/.nodebrew/current/bin:$PATH

source ~/.bashrc

nodebrew install-binary v0.12.7

nodebrew use v0.12.7

### Build the software
npm install
### bower install  # this appears to be completed within the npm install and this command errors
gulp

nodejs bin/Curviation.js

### Locate your machine on network
ifconfig

---
