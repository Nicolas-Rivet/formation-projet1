// Page index

function showProducts() {
    let listeProducts='';

    fetch('http://localhost:3000/api/teddies/')
    .then(function(response){
        return response.json()
    })
    .then(function (produits){
        for (let i = 0; i < produits.length; i++) {
            console.log(produits[i]);
            listeProducts +=    `<div class="col-lg-3 col-md-6 mb-4">
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
        document.getElementById('listeProducts').innerHTML = listeProducts;
    });
}
showProducts();

// Page produit