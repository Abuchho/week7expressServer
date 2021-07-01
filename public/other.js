let xhr = new XMLHttpRequest();
xhr.onload = function(){
    let price = this.responseText;
    console.log(price);

    document.getElementById('content').innerHTML = 
    `<span>Stock Symbol: ${price.symbol} 
    Price: ${price.regularMarketPrice}</span>`


}
xhr.open('GET', 'http://localhost:3000/stockPrice');
xhr.send();