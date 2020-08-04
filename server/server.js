const tickers = require('./tickers');
const path = require('path');
const {Pair, Arbitrage} = require('./util/spread.exports.js');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// hello this is Jacob
let symbols = {};
let exchanges = {};

(async () => {
    let getTickers = JSON.parse(await tickers());   

    for(let i = 0; i < getTickers.length; i++) {
        let pair = new Pair('easycrypto', getTickers[i].symbol, getTickers[i].bid, getTickers[i].ask);
        symbols[pair.symbol] = pair; //push array
        if(typeof exchanges[pair.exchange] === 'undefined') exchanges[pair.exchange] = { pairs : []};
    }

    console.log(symbols);

})().then(() => {
    console.log('Express')
    
    app.use(express.static(__dirname + '/../client/public')); //Refactor with path
    app.use(express.static(__dirname + '/node_modules/cryptocurrency-icons'));

    app.set('views', __dirname + '/../client/views');
    app.set('view engine', 'ejs');

    app.use(bodyParser.urlencoded({ extended: true })); 
    app.use(express.json());

    /**
     * API routes
     */
    app.get('/api/symbols', (req, res) => {
        res.json({symbols})
    });

    app.get('/api/pair/:pair', (req, res) => {
        let pair = req.params.pair.toUpperCase();
        res.json(symbols[pair])
    })

    app.get('/api/exchanges', (req, res) => {
        res.json({exchanges})
    });

    app.get('/', (req, res) => {
        res.render('index', {
            symbols: symbols,
        })
    })

    

    const port = process.env.PORT || 7000;
    const server = app.listen(port, () => {
        console.log(`Express running → PORT ${server.address().port}`);
        console.log(`http:localhost:${port}`)
    })

})


