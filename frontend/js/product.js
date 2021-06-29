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
    let productDescr='';
    let productColors='';
    let productForm='';
    let commandColor='';

    fetch('http://localhost:3000/api/' + activeCategorie + '/' + activeId)
    .then(function(response){
        return response.json()
    })
    .then(function(produit){
        
        console.log(produit);


        if (produit.colors != null) {      
            for (let i = 0; i < produit.colors.length; i++) {
                console.log(produit.colors[i]);
                productColors +=    `<span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100">
                                            <circle cx="50" cy="50" r="50" fill="grey"></circle>
                                            <circle cx="50" cy="50" r="48" fill="${produit.colors[i]}"></circle>
                                        </svg>
                                    </span>`

                commandColor +=     `<option value="${[i]}">${produit.colors[i]}</option>`
            }
        }

        productVisuel +=    `<img style="width:100%" src="${produit.imageUrl}">`

        productDescr += `<p class="h1 mb-2 text-uppercase">${produit.name}</p>
                            <p class="h1 mb-2 text-uppercase">${produit.price / 100}&nbsp;€</p>

                            <div class="card my-4">
                                <div class="card-body">
                                    <p class="card-text">${produit.description}</p>
                                </div>
                            </div>`

        productForm +=  `<div class="d-grid gap-2">
                            <select class="form-select" aria-label="Default select example">${commandColor}</select>
                            <button class="btn btn-success" type="button" onclick="addPanier(${activeId}, ${selectedProductColor}, ${selectedProductQuantity});">Button</button>
                        </div>`
                    
        document.getElementById('productVisuel').innerHTML = productVisuel;
        document.getElementById('productDescr').innerHTML = productDescr;
        document.getElementById('productColors').innerHTML = productColors;
        document.getElementById('productForm').innerHTML = productForm;
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