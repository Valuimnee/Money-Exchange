// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    if(currency<=0){
        return {};
    }
    if(currency>10000){
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }
    var obj=new Object();
    var h=currency/50 | 0;
    currency=currency%50;
    if(h>0){
        obj.H=h;
    }
    if(currency==0){
        return obj;
    }
    var q=currency/25 | 0;
    currency=currency%25;
    if(q>0){
        obj.Q=q;
    }
    if(currency==0){
        return obj;
    }
    var d=currency/10 | 0;
    currency=currency%10;
    if(d>0){
        obj.D=d;
    }
    if(currency==0){
        return obj;
    }
    var n=currency/5 | 0;
    currency=currency%5;
    if(n>0){
        obj.N=n;
    }
    if(currency==0){
        return obj;
    }
    var p=currency;
    if(p>0){
        obj.P=p;
    }
    return obj;
}
