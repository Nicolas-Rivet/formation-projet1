function addPanier(idArticle, optionArticle){
    if(localStorage.getItem("panierTeddies")){
        let panierContainerJson = localStorage.getItem("panierTeddies");
        let panierContainer = JSON.parse(panierContainerJson);
        let panierContainerFinal = [];

        let blnTrouve = false;

        for (let i=0; i < panierContainer.length; i++){
            let teddiesChoice = panierContainer[i];

            if (idArticle == teddiesChoice.id && optionArticle == teddiesChoice.option){
                console.log(`L'objet est déjà dans le panier`);

                teddiesChoice.quantity = teddiesChoice.quantity + 1;

                panierContainerFinal = JSON.stringify(panierContainer);
                localStorage.setItem("panierTeddies", panierContainerFinal);
                blnTrouve = true;
            }
            panierContainerFinal.push(teddiesChoice);
        }
        if (blnTrouve == false){
            let teddiesChoice = {
                id: idArticle,
                option: optionArticle,
                quantity: 1
            };

            panierContainerFinal.push(teddiesChoice);

        }
        panierContainerFinal = JSON.stringify(panierContainerFinal);
        localStorage.setItem("panierTeddies", panierContainerFinal);

    }
    else {
        let teddiesChoice = [{
            id: idArticle,
            option: optionArticle,
            quantity: 1
        }];

        teddiesChoiceJson = JSON.stringify(teddiesChoice);
        localStorage.setItem("panierTeddies", teddiesChoiceJson);
    }
}