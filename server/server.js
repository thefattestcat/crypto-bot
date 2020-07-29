const request = require('express');
const tickers = require('./tickers');
const {Pair, Arbitrage} = require('./util/spread.exports.js');

(async () => {
    let getTickers = JSON.parse(await tickers());   
    console.log(getTickers);
    let pair = new Pair(getTickers[0].symbol, getTickers[0].bid, getTickers[0].ask);
    console.log(pair.base)
    console.log(pair.quote)
    console.log(pair.pair)
})()


