## How does it work?
This bot uses the RPC node to detect pending transactions from a contract. When the contract owner attempts to add liquidity, this bot will auto buy before any other transactions, while the liquidy is pending.
It's been tested on VM's, local machines and on servers and it runs super well. 

I will be optimizing this going forward with enhancements. It's free right now but at some point in the near future I may lock it to be subscription or once off payment based. 

## Installation

Download the repo with

```bash
git clone https://github.com/georgeunidev/eth-bsc-sniperbot.git
cd my-project
```
Then edit env.json and save your changes

```bash
{
    "RPC": "https://bsc-dataseed.binance.org/", 
    "CHAIN": "56", 
    "RECIPIENT": "0x00000000000000000000000000",  
    "PRIVATE_KEY": "xxxxxxxxxxxxxxxxxxxxxxxxxx",   
    "CONTRACT_TO_SNIPE": "0x000000000000000", 
    "MULTIPLIER": "1",
    "AMOUNT_TO_BUY": "0.5" 
}
``` 
* RPC = your NODE url if a custom node or ETH. Custom nodes are way faster but if you want, you can use free services for BSC nodes like Infuria / Moralis / Quicknode or Binance nodes. For Eth you can also use the same or https://ethereumnodes.com/

* CHAIN = the Chain of your target network such as 56 for BSC, 1 for ETH etc. 

* RECIPIENT = Your address to receive tokens at 

* PRIVATE_KEY = Your private key to sign the transaction

* CONTRACT_TO_SNIPE =  The target contract address you want to snipe

* MULTIPLIER: = How many transactions to submit, ie buy 1 time or 5 times etc

* AMOUNT_TO_BUY = amount in either ETHER or BNB to buy depending on your NODE, accepts decimals




Run Powershell or a terminal

```bash
  cd my-project
  npm i
  node app.js
```


    <h1 align="center">Hi 👋, I'm George</h1>
<h3 align="center">A passionate frontend developer from Cambridge, studying Economics and Computer Science.</h3>

<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://stackoverflow.com/users/1315271/george" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/stack-overflow.svg" alt="georgeunidev" height="30" width="40" /></a>
<a href="https://medium.com/@g.email_65434" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/medium.svg" alt="georgeunidev" height="30" width="40" /></a>
</p>

<h3 align="left">Languages and Tools:</h3>
<p align="left"> <a href="https://backbonejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/backbonejs/backbonejs-original-wordmark.svg" alt="backbonejs" width="40" height="40"/> </a> <a href="https://www.cprogramming.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" alt="c" width="40" height="40"/> </a> <a href="https://clojure.org/" target="_blank" rel="noreferrer"> <img src="https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg" alt="clojure" width="40" height="40"/> </a> <a href="https://www.w3schools.com/cpp/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" alt="cplusplus" width="40" height="40"/> </a> <a href="https://www.java.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://www.php.net" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" alt="php" width="40" height="40"/> </a> <a href="https://www.python.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a> <a href="https://lucene.apache.org/solr/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg" alt="solr" width="40" height="40"/> </a> <a href="https://vuejs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg" alt="vuejs" width="40" height="40"/> </a> </p>

