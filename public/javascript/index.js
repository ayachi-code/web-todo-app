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
    //Stijl van de div die we maken
    div_binnen_todos.style = "background-color: palegreen;text-align: center;";
    //De P die binnen div binnen todos komt
    let p_binnen_div = document.createElement("p");
    //De text van de p tag is gelijk aan waarden
    let p_binnen_div_text = document.createTextNode(waarden); 
    //De text word binnen de p toegevoegt
    p_binnen_div.appendChild(p_binnen_div_text);
    //De p word binnen de div toegevoegt
    div_binnen_todos.appendChild(p_binnen_div);
    //De div word toegevoegt aan de opper div ('todos')
    onzichtbare_div_waar_de_todos_komen.appendChild(div_binnen_todos);




})