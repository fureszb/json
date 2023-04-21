let lista = []
$(function () {
    let file = "http://localhost:3000/ADATLISTA";
    adatBetolt(file, megjelenit);
    let pokemonVegpont="https://pokeapi.co/api/v2/pokemon/2";
    adatBetolt(pokemonVegpont, adatok => pokemonMegjelenit(adatok));
})

function adatBetolt(vegpont, callbackFv) {
    fetch(vegpont)
        .then((response) => response.json())
        .then((adatok) => {
            callbackFv(adatok);
        })
        .catch((error) => console.log(error));
}

function megjelenit(adatok){
    lista=adatok.ADATLISTA;
    console.log("megjelenít", adatok);
}

function pokemonMegjelenit(adatok) {
    var main = $("main");
    let txt = "";
    txt += "<div>";
    txt += `<h1>${adatok.name}</h1>`;
    txt += `<img src="${adatok.sprites.front_default}">`;
    txt += "</div>";
    main.html(txt);
}
