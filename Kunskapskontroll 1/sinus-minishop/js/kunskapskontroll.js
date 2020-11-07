
// making SINUS-logo my resetBTN 
let reset = document.querySelector('img');
reset.addEventListener('click', resetAll);


/********* EVENTLISTENERS ON NAVBAR **********/

// getting all links
let navlinks = document.querySelectorAll('nav a');

// Eventlistener for my list
// creating a variable to use to make sure we only make one list
let onlyOnce = true; 

navlinks[0].addEventListener('mouseover', function() {

    if (onlyOnce) {
        onlyOnce = false; 
        createList(); 
    }

})



/********  EVENTLISTENERS ON PRODUCT BUTTONS ********/

// getting all buttons
let btns = document.querySelectorAll('button');

// Changes made when pressing the button on the first product 
// New picture & name of hoodie
btns[0].addEventListener('click', function () {
    let img = document.querySelectorAll('img');
    img[2].src = "img/hoodie-forrest.png";

    let nameOfhoodies = document.querySelectorAll('h3');
    nameOfhoodies[0].innerText = 'Forrest';
})

// Make the background on each product random! 
btns[1].addEventListener('click', function () {
    let articles = document.querySelectorAll('article');
    articles[0].style.backgroundColor = makeRandomColor();
    articles[1].style.backgroundColor = makeRandomColor();
    articles[2].style.backgroundColor = makeRandomColor();
})

// Make the "where we are" disappear when you click the third button
btns[2].addEventListener('click', function() {
    let footerArticles = document.querySelectorAll('section article');  
    footerArticles[1].style.display = 'none'; 

})

// Make all buttons in main change to a random color when clicked 
for(let button of btns) {
    button.addEventListener('click', function() {
        button.style.backgroundColor = makeRandomColor(); 
    })
}


function resetAll() {

    // reset picture
    let img = document.querySelectorAll('img');
    img[2].src = "img/hoodie-ash.png";

    let nameOfhoodies = document.querySelectorAll('h3');
    nameOfhoodies[0].innerText = 'Ash';

    // reset random colors
    let articles = document.querySelectorAll('article'); 
    articles[0].style.backgroundColor = 'white'; 
    articles[1].style.backgroundColor = 'white'; 
    articles[2].style.backgroundColor = 'white'; 

    // reset "Where we are"
    let footerArticles = document.querySelectorAll('section article'); 
    console.log(footerArticles[1]); 
    footerArticles[1].style.display = 'block'; 

    // make list disappar 
    let ul = document.querySelector('ul'); 
    ul.remove(); 
    onlyOnce = true; 
}


// function to make random colors! 

const makeRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

// function to create a list, that I call on the eventlistener

function createList(){
    
    const listItems = ['WISHLIST:', '- Skateboard', '- Longboard', '- Shirt', '- Pants']; 
    const ul = document.createElement('ul'); 
    const main = document.querySelector('main'); 
   
    let li; 
    
    for (let i = 0; i < listItems.length; i++) {
    li = document.createElement('li'); 
    let text = document.createTextNode(listItems[i])
    li.appendChild(text);
    ul.appendChild(li)
    li.style.border = '1px solid black'; 
    li.style.margin = '0 auto'; 
    li.style.fontSize = '1rem'; 
    li.style.padding = '0.4rem'; 
    }
    
    main.insertAdjacentElement('afterend', ul);  
    ul.style.width = '1000px'
    ul.style.margin = '0 auto'; 
    ul.style.listStyle = 'none'; 

}