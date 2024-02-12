// colori random;
let titoli = document.querySelectorAll('.casualcolor');
console.log(titoli);

titoli.forEach((titolo)=>{
let red = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let green = Math.floor(Math.random() * (255 - 0 + 1) + 0);
let blue = Math.floor(Math.random() * (255 - 0 + 1) + 0);
titolo.style.color = `rgb(${red},${green}, ${blue})`;

});

// fine colori random
let father = document.querySelector('.cardjs')
let array=[
    {name : 'giovanni', cognome :'pasquale', eta : '31'},
    {name : 'nanni', cognome :'quale', eta : '21'},
    {name : 'gio', cognome :'pasqua', eta : '35'},

];

array.forEach((el)=>{
let ndiv = document.createElement('div');
ndiv.classList.add("cardCust");
ndiv.innerHTML=`
<div>
<p>${el.name}</p>
<p>${el.cognome}</p>
<p>${el.eta}</p>
<p>card innerjs per ogni obj in array</p>
</div>
`;
father.appendChild(ndiv);

});
father.style.display = `flex`;

// eventi, changecolor

let button = document.querySelector('.buttonheader');
let change = document.querySelector('#changecolor');

button.addEventListener('click',()=>{
// change.style.color = 'green';
// change.classList.remove('h2');
change.classList.toggle('colorgreen');
document.body.classList.toggle('colorpink');
});

