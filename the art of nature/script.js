//Product 1
const Picture1 =  {
    articleID: 10001,
    productname: 'Picture 1',
    description: "Berge Boot See Haus Bäume Herbst", 
    price: '56€',
    bildurl: 'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}

//Product 2
const Picture2 =  {
    articleID: 10002,
    productname: 'Picture 2',
    description: "wald Seee Frühling Bäume", 
    price: '48€',
    bildurl:'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
}

//Product 3
const Picture3 =  {
    articleID: 10003,
    productname: 'Picture 3',
    description: "Berge Menschen Sonnenaufgang Menschen", 
    price: '52€',
    bildurl:'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
}

//Product 4
const Picture4 =  {
    articleID: 10004,
    productname: 'Picture 4',
    description: "Felsen Strand Sand Bewölkt", 
    price: '65€',
    bildurl:'https://images.unsplash.com/photo-1461301214746-1e109215d6d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}

//Product 5
const Picture5 =  {
    articleID: 10005,
    productname: 'Picture 5',
    description: "Sonnenuntergang Mond Berge Winter", 
    price: '39€',
    bildurl:'https://images.unsplash.com/photo-1481660471672-28a88967efdc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}

//Product 6
const Picture6 =  {
    articleID: 10006,
    productname: 'Picture 6',
    description: "Winter Schweden Sonnenuntergang Wolken ", 
    price: '45€',
    bildurl:'https://images.unsplash.com/photo-1461696114087-397271a7aedc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
}

//Product 7
const Picture7 =  {
    articleID: 10007,
    productname: 'Picture 7',
    description: "Frühling Sonnenaufgang Berge", 
    price: '65€',
    bildurl:'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE3fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
}

//Product 8
const Picture8 =  {
    articleID: 10008,
    productname: 'Picture 8',
    description: "Felder Sonnenuntergang Wolken ", 
    price: '48€',
    bildurl:'https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjI5fHxuYXR1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
}
const produkte = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8];

const productContainer = document.getElementById('product-container');
 
// Produkte auf der Webseite anzeigen
const produktContainer = document.getElementById('products');
produkte.forEach(produkt => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.innerHTML = `
        <h2>${produkt.productname}</h2>
        <p>${produkt.description}</p>
        <p>Preis: $${produkt.price}</p>
        <p><button class="add-to-cart-button" id=btn${produkt.articleID}>In den Warenkorb</button></p>
        <p>${produkt.bildurl}
    `;
    produktContainer.appendChild(productCard);
});

