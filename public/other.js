let xhr = new XMLHttpRequest();
xhr.onload = function(){
    let price = JSON.parse(this.responseText);
    console.log(price);
    console.log(price.symbol)

    document.getElementById('content').innerHTML = 
    `<span>Stock Symbol: ${price.price.symbol} <br>
    Price: ${price.price.regularMarketPrice}</span>`


}
xhr.open('GET', 'http://localhost:3000/stockPrice');
xhr.send();