const request = require('request'); //request deprecated, refactor to request-promise-native instead?

const url = 'https://r.easycrypto.nz/pub/tickers';

let tickers = request(url, (err, res, body) => {
    if(err) console.error('error:', err);
    console.log('statusCode:', res && res.statusCode);
    console.log(body); 
    return body;
})

module.exports = {tickers};