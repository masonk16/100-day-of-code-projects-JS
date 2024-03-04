"use strict"

let accessAllowed;
let year = prompt("When was the first FIFA World Cup?: ");
if (year==1930){
    alert("Lovely stuff")
    alert("That was a beautiful year")
    accessAllowed = true
} else if(year==1934){
    alert("Mmmmmm manyepa henyu")
    accessAllowed = false
} else if(year==1940){
    alert("Mapotsa nemakore gumi!")
    accessAllowed = false
} else{
    alert("Haaa siyana nazvo")
    accessAllowed = false
}

let worldCupYear = (year==1930) ? true : false;

let age = prompt("How old are you?: ", 18);
let message = (age<18) ? "Too young" :
    (age>21) ? "Welcome!" :
        (age<50) ? "Makwegura" : "Ibvai pano";

alert(message)