//variables

var a; //declarar
var b='b'; //declarar y asignar
b='bb'; //reasignar
var a='aa';//redeclaracion

//global scope

var fruit ='Apple'; //global

function bestFruit() 
{
    console.log(fruit);
    
}

bestFruit();

function countries(){
    country='Colombia';
    console.log(country);
}