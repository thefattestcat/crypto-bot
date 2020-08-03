
class Pair {
    /**
     * @param {string} exchange
     * @param {*} symbol 
     * @param {*} bid 
     * @param {*} ask 
     * @description asdasdsad
     */
    constructor(exchange, symbol, bid, ask) {
        this.exchange = exchange;
        this.symbol = symbol;
        this.bid = bid;
        this.ask = ask;
        this.pair = this.splitSymbol(symbol);
    }

    splitSymbol(symbol) {
        const base = symbol.substring(symbol.length - 3, symbol.length);
        const quote = symbol.substring(0, symbol.length - 3);
        this.base = base;
        this.quote = quote;
        return {symbol: this.symbol, base: base, quote: quote, bid: this.bid, ask: this.ask};
    }

    createEndpointListener() {
        
    }
    
}

class Arbitrage {
    /**
     * 
     * @param {*} pair1 
     * @param {*} pair2 
     * @param {*} basePair 
     */
    constructor(pair1, pair2, basePair) {
        this.pair1 = pair1;
        this.pair2 = pair2;
        this.basePair = basePair;
    }

    calculateSpread() {
        let spread = 0;
        //Spread calc here
        return spread;
    }

    get spread() {
        return this.calculateSpread();
    }
}

module.exports = {Pair, Arbitrage}