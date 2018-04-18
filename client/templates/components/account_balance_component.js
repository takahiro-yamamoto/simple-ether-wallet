//テンプレート「accountStatusComponent」のヘルパー
Template.accountBalanceComponent.helpers({
  //アカウント情報の取得
  accounts: function(){
    return EthAccounts.find({});
  }
});

Template.accountBalanceItem.onCreated(function() {
    this._balance = new ReactiveVar;
});

//テンプレート「accountBalanceItem」のヘルパー
Template.accountBalanceItem.helpers({
  //アカウントの名前の取得
  name: function(){
    return this.name;
  },
  //アカウントのアドレスの取得
  address: function(){
    return this.address;
  },
  //アカウントが持つEtherの残高を取得（単位はEtherで、小数点３ケタまで取得）
  balance: function(){
    var instance = Template.instance()
    ymc.balanceOf.call(this.address, function(err, res) {
      instance._balance.set(res);
    })
    return instance._balance.get();
  }
});
