class Exchange {
    /**
     * @param {string} name - Exchange name
     * @param {string} tickersAPI - Tickers API endpoint
     * @param {string} pairAPI - Pair API endpoint
     */
    constructor(name, tickersAPI, pairAPI) {
        this.name = name;
        this.tickersAPI = tickersAPI;
        this.pairAPI = pairAPI;
    }
    
    createEndpointListener() {
        return new Promise ( (resolve, reject) => {
            
        })
    }
}

module.exports = {Exchange};