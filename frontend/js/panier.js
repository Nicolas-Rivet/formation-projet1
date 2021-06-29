async function showProductsPanier() {
    if(localStorage.getItem("panierTeddies")){
        let listeProductsPanier =  `<table class="table text-center">
                                        <thead>
                                            <tr>
                                                <th scope="col">Référence</th>
                                                <th scope="col">Photo</th>
                                                <th scope="col">Nom produit</th>
                                                <th scope="col">Couleur</th>
                                                <th scope="col">Quantité</th>
                                                <th scope="col">Prix</th>
                                                <th scope="col">Retirer</th>
                                            </tr>
                                        </thead>
                                        <tbody>`;
        let panierContainerJson = localStorage.getItem("panierTeddies");
        let panierContainer = JSON.parse(panierContainerJson);
        for (let i=0; i < panierContainer.length; i++){
            let teddy = panierContainer[i];
            await fetch('http://localhost:3000/api/' + 'teddies' + '/' + teddy.id)
            .then(function(response){
                return response.json()
            })
            .then(function (produits){
                    console.log(produits);
                    listeProductsPanier +=      `<tr>
                                                    <td>${produits._id}</td>
                                                    <td><img src="${produits.imageUrl}" style='height:30px' class="">     </td>
                                                    <td>${produits.name}</td>
                                                    <td>${teddy.option}</td>
                                                    <td>${teddy.quantity}</td>
                                                    <td>${(produits.price / 100) * teddy.quantity} €</td>
                                                    <td>
                                                        <a>
                                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
                                                                <path fill-rule="evenodd" d="M6.5 1.75a.25.25 0 01.25-.25h2.5a.25.25 0 01.25.25V3h-3V1.75zm4.5 0V3h2.25a.75.75 0 010 1.5H2.75a.75.75 0 010-1.5H5V1.75C5 .784 5.784 0 6.75 0h2.5C10.216 0 11 .784 11 1.75zM4.496 6.675a.75.75 0 10-1.492.15l.66 6.6A1.75 1.75 0 005.405 15h5.19c.9 0 1.652-.681 1.741-1.576l.66-6.6a.75.75 0 00-1.492-.149l-.66 6.6a.25.25 0 01-.249.225h-5.19a.25.25 0 01-.249-.225l-.66-6.6z"/>
                                                            </svg>
                                                        </a>
                                                    </td>
                                                </tr>`;
                
                
            });
        }
        listeProductsPanier += `</tbody>
                            </table>`
        document.getElementById('listeProductsPanier').innerHTML = listeProductsPanier;
    }
    else {
        let listeProductsPanier =  `<div style="text-align:center;">Votre panier est vide</div>`;
        document.getElementById('listeProductsPanier').innerHTML = listeProductsPanier;    
    }
}
showProductsPanier();