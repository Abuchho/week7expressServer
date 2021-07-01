
const express = require('express');
const app = express();
var yahooFinance = require('yahoo-finance');

yahooFinance.quote({
    symbol: 'AAPL',
    modules: ['price']
}, function (err, quotes){
    console.log(quotes);
});





app.use(express.static('public'));

app.get('/stockPrice', function(req, res) {
    res.send('Hello')
})

app.listen(3000);

