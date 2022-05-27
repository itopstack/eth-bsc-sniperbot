## How does it work?
This bot uses the RPC node to detect pending transactions from a contract. When the contract owner attempts to add liquidity, this bot will auto buy before any other transactions, while the liquidy is pending.
It's been tested on VM's, local machines and on servers and it runs super well. 

I will be optimizing this going forward with enhancements. It's free right now but at some point in the near future I may lock it to be subscription or once off payment based. 

## Installation

Download the repo with

```bash
git clone https://github.com/georgeunidev/eth-bsc-sniperbot.git
cd eth-bsc-sniperbot
```
Then edit env.json and save your changes

```json
{
    "PRIVATE_KEY": "REPLACEME with your private key",
    "YOUR_ADDRESS": "REPLACEME with your address that will buy",
    "NODE": "https://bsc-dataseed.binance.org/",  //replace with another node or leave this one here 
    "TOKEN": "CONTRACTTOSNIPEADDRESSHERE", //replace with the contract address you wish to snipe 
    "INVESTMENT": "BNB OR ETHER VALUE HERE", //replace with the number with decimals such as 0.01 or 5.1 etc. The currency ETHER or BNB is determined by which node, if you use a BSC node you will be paying in BNB here
    "GASLIMIT": "1000000", //custom gas limit
    "GWEI": "5",
    "AUTOSELL": "TRUE",  //if true then the bot will detect profits and sell for you
    "AUTOSELLPERCENT": "110"  //set the % profit to sell at
}
``` 

Run Powershell or a terminal

```json
  npm i
  node app.js
```
**NOTE:** Some users reported an error on first time running, just repeat the node app.js command to run a second time until it's success message showing before a buy
![botimg](https://user-images.githubusercontent.com/104032344/170780790-7153ae76-67b5-4e18-a612-061a6e2cd876.png)


<h2> VISIT US ON TELEGRAM https://t.me/sniperbot2022 </H2>

 <h3 align="center">A passionate frontend developer from Cambridge, studying Economics and Computer Science.</h3>

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://stackoverflow.com/users/1315271/george" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="georgeunidev" height="30" width="40" /></a>
<a href="https://medium.com/@g.email_65434" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="georgeunidev" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://backbonejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg" alt="backbonejs" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://clojure.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" alt="clojure" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://lucene.apache.org/solr/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg" alt="solr" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> </p>

Tags: 
binance smart chain sniper bot
Mempool sniper
Pcs sniper
Pancakeswap
Ethereum sniper
Dxsale sniper
Snipe bot
2022 sniper
