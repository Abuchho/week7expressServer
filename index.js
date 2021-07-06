
const express = require('express');
const app = express();
var yahooFinance = require('yahoo-finance');

// yahooFinance.quote({
//     symbol: 'AAPL',
//     modules: ['price']
// }, function (err, quotes){
//     console.log(quotes);
// });


//req.query is the info in the search bar with a ? and then var =
//window.location.search 


app.use(express.static('public'));

app.get('/stockPrice', function(req, res) {
    yahooFinance.quote({
        symbol: 'AAPL',
        modules: ['price']
    }, 
    function (err, quotes){
        res.send(quotes)     
    });
   
});

app.listen(3000);

