//Globalen variablen
let input_van_text;

//De onzichtbare div
let onzichtbare_div_waar_de_todos_komen = document.getElementById("todos");



//Als knop + word geklikt
let voeg = document.getElementById("voeg_toe").addEventListener('click',() => {
    //De waarden van de input word opgeslagen in variablen input text
    let waarden = input_van_text = document.getElementById("typen").value;

    //Div word gemaakt dat binnen de todos komt elke keer komt
    let div_binnen_todos = document.createElement("div");
    //De P die binnen div binnen todos komt
    let p_binnen_div = document.createElement("p");




})