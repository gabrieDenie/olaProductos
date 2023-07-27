
// get elemento por id

/*
const titulo = document.getElementById('titulo');
console.log(titulo.tagName);

*/

// get elemento por clase

/*
const ristorants = document.getElementsByClassName('ristorant');
console.log(ristorants[0].textContent);
pass: console.log(ristorants[0]GITHUNCPILOT
*/

// get elemento por tag

/*
const ristorants = document.getElementsByTagName('li');
console.log(ristorants);

// get elemento por class
const fondoMarron = document.getElementsByClassName('fondo-marron');
console.log(fondoMarron);
*/

// querySelector

/*
const aceituna = document.querySelector('#aceitunas');
console.log(aceituna);
*/

// querySelectorAll
const ristorantsBlanco = document.querySelectorAll('.ristorant.fondo-blanco');
//console.log(ristorantsBlanco); // devuelve un  NodeList
console.log(ristorantsBlanco.length); // devuelve un  NodeList

// resumen de lo visto hasta ahora
/* 
getElementById
getElementsByClassName
getElementsByTagName
querySelector : solo devuelve el primer elemento que encuentra
querySelectorAll
*/