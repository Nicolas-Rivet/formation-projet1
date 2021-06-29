function addPanier(idArticle, optionArticle, quantityArticle){
    if(localStorage.getItem("panierTeddies")){
        let panierContainerJson = localStorage.getItem("panierTeddies");
        let panierContainer = Json.parse(panierContainerJson);

        let teddiesChoice = {
            id: idArticle,
            option: optionArticle,
            quantity: parseInt(quantityArticle)
        };

        for (let i=0; i < panierContainer.lenght; i++){
            let count = panierContainer[i];

            if (teddiesChoice.id == count.id && teddiesChoice.option == count.option){
                console.log(`L'objet est déjà dans le panier`);

                teddiesChoice.quantity = parseInt(count.quantity) + teddiesChoice.quantity;
                panierContainer.splice([i], i, teddiesChoice);

                panierContainerFinal = JSON.stringify(panierContainer);
                localStorage.setItem("panierTeddies", panierContainerFinal);
            } else {
                let panierTeddiesChoice = [{
                    id: idArticle,
                    option: optionArticle,
                    quantity: quantityArticle
                }];
    
                teddiesChoiceJson = JSON.stringify(panierTeddiesChoice);
                localStorage.setItem("panierTeddies", teddiesChoiceJson);
            }
        } 
    }
}