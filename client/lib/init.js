// //Web3インスタンスの生成
// web3 = new Web3();
//
// // //RPCプロバイダを設定
// // //URLの部分は読者の環境に合わせてください。（localhostの部分はIPアドレスにて指定してもかまいません。）
// if(!web3.currentProvider)
//   // web3.setProvider(new web3.providers.HttpProvider("http://localhost:8545"));
//   web3.setProvider(new Web3.providers.HttpProvider('https://ropsten.infura.io/'));


if (typeof web3 !== 'undefined') {
  web3 = new Web3(web3.currentProvider);
} else {
  // set the provider you want from Web3.providers
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

// EthAccounts初期化
EthAccounts.init();

//EthBlocksの初期化
EthBlocks.init();

//Session変数の初期化
initSessionVars();

//Transactionsコレクションの初期化
Transactions = new Mongo.Collection('transactions', {connection: null});

//オブザーバの起動
observeNode();
observeTransactions();

ymc = web3.eth.contract(ymcABI).at(ymcAddr)
