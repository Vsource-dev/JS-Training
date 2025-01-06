const fruits = document.getElementsByClassName('fruit');

Array.from(fruits).forEach(fruit=> {

    fruit.style.backgroundColor = 'red'

});

const h4elem = document.getElementsByTagName('h4');

Array.from(h4elem).forEach(h4elem=>{

    h4elem.style.backgroundColor = 'yellow'

});

const lists = document.getElementsByTagName('li');

Array.from(lists).forEach(lists => {

    lists.style.fontFamily = 'Monospace'

});

const element = document.querySelector('.fruit');

element.style.backgroundColor = 'green'

const element1 = document.querySelectorAll('li')
element1[4].style.backgroundColor = 'yellow'

element1.forEach(element1 => {

    element1.style.fontSize = '4em'

})