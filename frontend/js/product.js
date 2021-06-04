function showProduct() {
    let productName='';
    let productImageUrl='';
    let productPrice='';
    let productDescription='';
    let productColors='';
    let commandColor='';

    fetch('http://localhost:3000/api/teddies/5be9c8541c9d440000665243')
    .then(function(response){
        return response.json()
    })
    .then(function (produit){
        
            console.log(produit);

            productName += `${produit.name}`;
            productImageUrl += `<img style="width:100%" src="${produit.imageUrl}">`;
            productPrice += `${produit.price / 100}&nbsp;€`;
            productDescription += `${produit.description}`;

            for (let i = 0; i < produit.colors.length; i++) {
                console.log(produit.colors[i]);
                productColors +=    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="50" fill="grey"></circle>
                                        <circle cx="50" cy="50" r="48" fill="${produit.colors[i]}"></circle>
                                    </svg>`

                commandColor +=     `<option value="${[i]}">${produit.colors[i]}</option>`
            }
       
        document.getElementById('productName').innerHTML = productName;
        document.getElementById('productImageUrl').innerHTML = productImageUrl;
        document.getElementById('productNameAriane').innerHTML = productName;
        document.getElementById('productPrice').innerHTML = productPrice;
        document.getElementById('productDescription').innerHTML = productDescription;
        document.getElementById('productColors').innerHTML = productColors;
        document.getElementById('commandColor').innerHTML = commandColor;
    });
}
showProduct();

function showProductsTeddies() {
    let listeProductsTeddies='';

    fetch('http://localhost:3000/api/teddies/')
    .then(function(response){
        return response.json()
    })
    .then(function (produits){
        for (let i = 0; i < produits.length; i++) {
            console.log(produits[i]);
            listeProductsTeddies +=     `<div class="col-lg-2 col-md-4 mb-4">
                                            <div class="card">
                                                <a href="/teddie/${produits[i]._id}">
                                                    <img src="${produits[i].imageUrl}" class="card-img-top">                                    
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class=""><strong><a href="/teddie/${produits[i]._id}" class="">${produits[i].name}</a></strong></h5>
                                                    <h4 class=""><strong>${produits[i].price / 100}</strong>&nbsp;€</h4>
                                                </div>
                                            </div>
                                        </div>`;
        }
        document.getElementById('listeProductsTeddies').innerHTML = listeProductsTeddies;
    });
}
showProductsTeddies();