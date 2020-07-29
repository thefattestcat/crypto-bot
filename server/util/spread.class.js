/**
 * 
 */
class Pair {
    constructor(symbol, bid, ask) {
        this.symbol = symbol;
        this.pair = this.splitSymbol(this.symbol);
        this.bid = bid;
        this.ask = ask;
    }

    splitSymbol(symbol) {
        const base = symbol.substring(this.symbol.length - 3, this.symbol.length);
        const quote = symbol.substring(0, symbol.length - 3);
        return {base: base, quote: quote};
    }

    get base() {
        return this.pair.base;
    }

    get quote() {
        return this.pair.quote;
    }

    get bid() {
        return this.bid;
    }

    get ask() {
        return this.ask;
    }
}

class Arbitrage {
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