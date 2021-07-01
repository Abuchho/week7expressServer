
const express = require('express');
const app = express();
var yahooFinance = require('yahoo-finance');

// yahooFinance.quote({
//     symbol: 'AAPL',
//     modules: ['price']
// }, function (err, quotes){
//     console.log(quotes);
// });


//req.params


app.use(express.static('public'));

app.get('/stockPrice', function(req, res) {
    yahooFinance.quote({
        symbol: 'TSLA',
        modules: ['price']
    }, 
    function (err, quotes){
        res.send(quotes)     
    });
   
});

app.listen(3000);

