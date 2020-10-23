var wifi = require('node-wifi');

var wallet = require('ethers')

var privateKey = "...";
var wallet = new Wallet(privateKey);

let etherscanProvider = new ethers.providers.EtherscanProvider('ropsten')

let address = "0x45D88Ca5aF1eA87b8c38377b6B4455E75225db26";

seed = 143

wifi.init({
  iface: null // network interface, choose a random wifi interface if set to null
});
 
// Scan networks
wifi.scan((error, networks) => {
  if (error) {
    console.log(error);
  } else {
    console.log(networks);
  }
});
 
// Wifi is Funeral
var ssids = [{
    ssid: 'bell', password: ''
  },{
    ssid: 'iphone', password: ''
  }
]

var bool = true

setInterval(() => {
  console.log('count')

  bool != bool;
  var net = ssids[bool ? 1 : 0]

  wifi.connect(net, error => {
    if (error) {
      console.log(error);
    }
    console.log('Connected');
       console.log(net)

    // First 4 bytes of the hash of "fee()" for the sighash selector
    let data = ethers.utils.hexDataSlice(ethers.utils.id('addPayment()'), seed, 100, 1, );

    let transaction = {
        to: address,
        data: data
    }

    let callPromise = defaultProvider.call(transaction);

    callPromise.then((result) => {
        console.log(result);
        // "0x000000000000000000000000000000000000000000000000016345785d8a0000"

        console.log(ethers.utils.formatEther(result));
        // "0.1"
    });

  });

}, 1000)

// wifi.connect(ssids[1], error => {
//   if (error) {
//     console.log(error);
//   }
//   console.log('Connected');
// });