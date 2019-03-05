module.exports = function makeExchange(currency) {
    let coins = {};
    if (currency > 10000) {
        coins.error = "You are rich, my friend! We don't have so much coins for exchange";
        return coins;
    }
    else if (currency <= 0) {
        return coins;
    }
    else {
        let coinDenomination = {
            H: 50,
            Q: 25,
            D: 10,
            N: 5,
            P: 1
        };
        for (var key in coinDenomination) {
            if (currency >= coinDenomination[key]){
                coins[key] = Math.floor(currency / coinDenomination[key]);
                currency = currency - coins[key] * coinDenomination[key];
            }
        }
        return coins;
    }
}