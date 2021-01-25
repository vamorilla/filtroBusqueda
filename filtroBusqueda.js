// Filtros de busqueda
const d = document;

const $cards = d.getElementById("cards");
const $searchBox = d.getElementById("search");

const elementSearch = () => {
    
    let filter = $searchBox.value.toUpperCase();
    let $figure = $cards.querySelectorAll("figure");

    for(let i = 0; i < $figure.length; i++){
        let textValue = $figure[i].textContent;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            $figure[i].style.display = "";
        }else{
            $figure[i].style.display = "none";
        }
    }
}

elementSearch();

$searchBox.addEventListener("keyup", elementSearch);  