const request = require('request'); //request deprecated, refactor to request-promise-native instead?

const tickers = async () => {
    return new Promise((resolve, reject) => {
        const url = 'https://r.easycrypto.nz/pub/tickers';

        request(url, (err, res, body) => {
            if(err) reject(err);
            console.log('statusCode:', res && res.statusCode);
            resolve(body);
        })
    })
}

module.exports = tickers;