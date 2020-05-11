function work() {
    console.log("working");
}

let davor = document.getElementById("davor");
let zkInput = document.getElementById("zk-input");
let hinten = document.getElementById("hinten");
let zkTrennung = document.getElementById("zk-tp");
let vorne = document.getElementById("vorne");


function trennen(){

     if (davor.checked) {
        vorne.innerHTML = (zkInput.value.split(`${zkTrennung.value}`)[0]);
        hinten.innerHTML = (`${zkTrennung.value}`)+(zkInput.value.split(`${zkTrennung.value}`)[1]);

    } else {
        vorne.innerHTML = (zkInput.value.split(`${zkTrennung.value}`)[0])+(`${zkTrennung.value}`) ;
        hinten.innerHTML = (zkInput.value.split(`${zkTrennung.value}`)[1]);      
}}



function löschen(){
    zkTrennung.value = "";
    zkInput.value = "";
    vorne.innerHTML = "";
    hinten.innerHTML = "";
}




