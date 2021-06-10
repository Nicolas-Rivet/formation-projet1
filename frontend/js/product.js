var activeId = '5be9c8541c9d440000665243';
var activeCategorie = 'teddies';
var selectedProductColor='bleu';
var selectedProductQuantity = '2';

let url= new URL(window.location.href);
let params = new URLSearchParams(url.search)

if (params.get('id') != null) {
    var activeId = params.get('id');
}

if (params.get('categorie') != null) {
    var activeCategorie = params.get('categorie');
}

console.log(url.search);
console.log(activeId);


function showProduct() {
    let productName='';
    let productImageUrl='';
    let productPrice='';
    let productDescription='';
    let productColors='';

    fetch('http://localhost:3000/api/' + activeCategorie + '/' + activeId)
    .then(function(response){
        return response.json()
    })
    .then(function(produit){
        
        console.log(produit);

        productName += `${produit.name}`;
        productImageUrl += `<img style="width:100%" src="${produit.imageUrl}">`;
        productPrice += `${produit.price / 100}&nbsp;€`;
        productDescription += `${produit.description}`;

        if (produit.colors != null) {      
            for (let i = 0; i < produit.colors.length; i++) {
                console.log(produit.colors[i]);
                productColors +=    `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100">
                                        <circle cx="50" cy="50" r="50" fill="grey"></circle>
                                        <circle cx="50" cy="50" r="48" fill="${produit.colors[i]}"></circle>
                                    </svg>`

                commandColor +=     `<option value="${[i]}">${produit.colors[i]}</option>`

                document.getElementById('productColors').innerHTML = productColors;            
                document.getElementById('commandColor').innerHTML = commandColor;
            }
        }
        document.getElementById('productName').innerHTML = productName;
        document.getElementById('productImageUrl').innerHTML = productImageUrl;
        document.getElementById('productNameAriane').innerHTML = productName;
        document.getElementById('productPrice').innerHTML = productPrice;
        document.getElementById('productDescription').innerHTML = productDescription;
    });
}
showProduct();

function showProductsAssocie() {
    let listeProductsAssocie='';

    fetch('http://localhost:3000/api/' + activeCategorie)
    .then(function(response){
        return response.json()
    })
    .then(function (produits){
        for (let i = 0; i < produits.length; i++) {
            if (produits[i]._id != activeId) {
                console.log(produits[i]);
           
                listeProductsAssocie += `<div class="col-lg-2 col-md-4 mb-4">
                                            <div class="card">
                                                <a href="../${activeCategorie}/produit.html?id=${produits[i]._id}&categorie=${activeCategorie}">
                                                    <img src="${produits[i].imageUrl}" class="card-img-top">                                    
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class=""><strong><a href="../${activeCategorie}/produit.html?id=${produits[i]._id}&categorie=${activeCategorie}" class="">${produits[i].name}</a></strong></h5>
                                                    <h4 class=""><strong>${produits[i].price / 100}</strong>&nbsp;€</h4>
                                                </div>
                                            </div>
                                        </div>`;
            }
        }
        document.getElementById('listeProductsAssocie').innerHTML = listeProductsAssocie;
    });
}
showProductsAssocie();

myStorage = window.localStorage;
localStorage.setItem('productCategorie', activeCategorie);
localStorage.setItem('productId', activeId);
localStorage.setItem('selectedProductQuantity', selectedProductQuantity);

if (selectedProductColor != null) {
    localStorage.setItem('selectedProductColor', selectedProductColor);
}