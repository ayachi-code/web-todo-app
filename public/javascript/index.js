//Globalen variablen
let input_van_text;

//De onzichtbare div
let onzichtbare_div_waar_de_todos_komen = document.getElementById("todos");

//Array met de todos
let todos_alle = [];



//Als knop + word geklikt
let voeg = document.getElementById("voeg_toe").addEventListener('click',() => {
    //De waarden van de input word opgeslagen in variablen input text
    let waarden = input_van_text = document.getElementById("typen").value;
    //Push naar array
    todos_alle.push(waarden)
    //Div word gemaakt dat binnen de todos komt elke keer komt
    let div_binnen_todos = document.createElement("div");
    //Stijl van de div die we maken
    div_binnen_todos.style = "background-color: palegreen;text-align: center;height: 40px;border-style: dotted;border-width: 2px";
    //De P die binnen div binnen todos komt
    let p_binnen_div = document.createElement("p");
    //De text van de p tag is gelijk aan waarden
    let p_binnen_div_text = document.createTextNode(waarden); 
    //De text word binnen de p toegevoegt
    p_binnen_div.appendChild(p_binnen_div_text);
    //Button word gemaakt in de div
    let button_in_de_div = document.createElement("button");
    //Text voor de knop gemaakt
    let button_in_de_div_text = document.createTextNode("Verwijder");
    //Text aan button
    button_in_de_div.appendChild(button_in_de_div_text);
    //Stijl voor knop
    button_in_de_div.style = "float: right;margin-top:-30px";
    //Eventlistener als verwijder word geklikt
    button_in_de_div.addEventListener('click',() => {
        console.log("Test")
    })
    //De p word binnen de div toegevoegt
    div_binnen_todos.appendChild(p_binnen_div);
    //Button word in de div gezet
    div_binnen_todos.appendChild(button_in_de_div);
    //De div word toegevoegt aan de opper div ('todos')
    onzichtbare_div_waar_de_todos_komen.appendChild(div_binnen_todos);




})