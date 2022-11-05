let nextPage = null;
let prevPage = null;

function getPokemons(pageUrl = "https://pokeapi.co/api/v2/pokemon/") {
    let request = new XMLHttpRequest();
    request.open("get", pageUrl, true);
    request.send();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const response = JSON.parse(this.responseText);
            nextPage = response.next;
            prevPage = response.previous;
            const results = response.results;
            let pokemonContainer = document.getElementById("pokemon-table");
            if(pokemonContainer == undefined){
                pokemonContainer = document.getElementById("body").innerHTML = "<div id='container'><table id='table' class='table'><thead><tr><th scope='col'>Nombre</th><th scope='col'>Detalles</th></tr></thead><tbody id='pokemon-table'></tbody></table><button onclick='getPrevPage()'>&lt; Prev</button><button onclick='getNextPage()'>Next &gt;</button></div>"
                getPokemons();
            }

            for (let i = 0; i < results.length; i++) {
                let pokemon = results[i];

                pokemonContainer.innerHTML += "<td>" + pokemon.name + "</td><td>  <button  onclick =" + 'showPokemon("'+pokemon.url+'") '+ ">Detalle</button> </td></tr><br />";
            }
        }
    };
}


function showPokemon(url) {
    let pokemonContainer = document.getElementById("body");
        pokemonContainer.innerHTML = "";
        let request = new XMLHttpRequest();
        request.open("get", url, true);
        request.send();

        request.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                const response = JSON.parse(this.responseText);

                if(response.types.length > 1){
                    pokemonContainer.innerHTML +=" <div class='card' style='width: 18rem;'> <img src='"+ response.sprites.other['official-artwork'].front_default +"' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+(response.name).toUpperCase()+"</h5><p class='card-text'>Tipo: "+(response.types[0].type.name).toUpperCase()+ ", "+(response.types[1].type.name).toUpperCase() +"</p></div><button  onclick =" + 'getPokemons()'+ ">Atras</button></div>";
                }else{
                    pokemonContainer.innerHTML +=" <div class='card' style='width: 18rem;'> <img src='"+ response.sprites.other['official-artwork'].front_default +"' class='card-img-top' alt='...'><div class='card-body'><h5 class='card-title'>"+(response.name).toUpperCase()+"</h5><p class='card-text'>Tipo: "+(response.types[0].type.name).toUpperCase()+"</p></div><button  onclick =" + 'getPokemons()'+ ">Atras</button></div>";
                }
                
              
            }
        };
  }



function getNextPage() {
    console.log("Next: " + nextPage)
    let pokemonContainer = document.getElementById("pokemon-table");
    pokemonContainer.innerHTML = "";
    getPokemons(nextPage);
}


function getPrevPage() {
    if (prevPage != null) {
        let pokemonContainer = document.getElementById("pokemon-table");
        pokemonContainer.innerHTML = "";
        getPokemons(prevPage);
    } else {
        console.log("No hay página anterior");
    }
}
