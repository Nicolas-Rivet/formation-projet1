// Page index

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

function showProductsCameras() {
    let listeProductsCameras='';

    fetch('http://localhost:3000/api/cameras/')
    .then(function(response){
        return response.json()
    })
    .then(function (produits){
        for (let i = 0; i < produits.length; i++) {
            console.log(produits[i]);
            listeProductsCameras +=     `<div class="col-lg-2 col-md-4 mb-4">
                                            <div class="card">
                                                <a href="/cameras/${produits[i]._id}">
                                                    <img src="${produits[i].imageUrl}" class="card-img-top">                                    
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class=""><strong><a href="/teddie/${produits[i]._id}" class="">${produits[i].name}</a></strong></h5>
                                                    <h4 class=""><strong>${produits[i].price / 100}</strong>&nbsp;€</h4>
                                                </div>
                                            </div>
                                        </div>`;
        }
        document.getElementById('listeProductsCameras').innerHTML = listeProductsCameras;
    });
}
showProductsCameras();

function showProductsFurniture() {
    let listeProductsFurniture='';

    fetch('http://localhost:3000/api/furniture/')
    .then(function(response){
        return response.json()
    })
    .then(function (produits){
        for (let i = 0; i < produits.length; i++) {
            console.log(produits[i]);
            listeProductsFurniture +=     `<div class="col-lg-2 col-md-4 mb-4">
                                            <div class="card">
                                                <a href="/furniture/${produits[i]._id}">
                                                    <img src="${produits[i].imageUrl}" class="card-img-top">                                    
                                                </a>
                                                <div class="card-body text-center">
                                                    <h5 class=""><strong><a href="/furniture/${produits[i]._id}" class="">${produits[i].name}</a></strong></h5>
                                                    <h4 class=""><strong>${produits[i].price / 100}</strong>&nbsp;€</h4>
                                                </div>
                                            </div>
                                        </div>`;
        }
        document.getElementById('listeProductsFurniture').innerHTML = listeProductsFurniture;
    });
}
showProductsFurniture();