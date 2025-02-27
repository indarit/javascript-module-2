/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
const list=document.querySelectorAll("p")
// console.log(list);

const div= document.querySelectorAll("div")
const firstDiv= div[0]
// console.log(firstDiv);

const jumbotron = document.querySelectorAll("#jumbotron-text");
// console.log(jumbotron);

const primary= document.querySelectorAll(".primary-content p")
console.log(primary);




/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let myButton = document.querySelector("#alertBtn");
myButton.addEventListener("click", alertSomething);

function alertSomething() {
  alert("Thanks for visiting Bikes for Refugees");
}

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let changeBtn = document.querySelector("#bgrChangeBtn");
changeBtn.addEventListener("click", changeColor);

function changeColor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = "#abceeb";
}
/*
Task 4
======

When a user clicks the ‘Add some text’ button, a new paragraph should be added inside the section that says “LEARN MORE”
*/
const mainArticles= document.querySelector("#mainArticles")
const addTextBtn = document.querySelector("#addTextBtn")
addTextBtn.addEventListener("click", addParagraph)


function addParagraph(btn){
const p= document.createElement("p")
p.innerText="Nuevo Parrafo"
mainArticles.appendChild(p)
}


/*
Task 5
======
When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
const button = document.querySelector("#largerLinksBtn");
button.addEventListener("click", aumentarLink);
function aumentarLink() {
    const links= document.querySelectorAll("a")
    links.forEach(link=>link.style.fontSize="x-large")
}
/*
Task 6
======
Using the same function in Task 4,
When the 'Add' button is clicked, get the text inside the input field and create a new paragraph in the "LEARN MORE" section
Also clear the text inside the input field
*/
const addArticleBtn= document.querySelector("#addArticleBtn") 
// obtener el input
const inputAddArticle = document.querySelector(".addArticle")
// agregar evento al boton
addArticleBtn.addEventListener("click",addParagraph2);
// tomar el texto del input
// añadir a mainArticles un parrafo
// limpiar el input 

function addParagraph2(){
    const p= document.createElement("p")
    p.innerText= inputAddArticle.value
    mainArticles.appendChild(p)
    inputAddArticle.value=""
}

/*
Task 7
======

Create an array of 5 different colors.
Using the same function in Task 3, every time the 'Change colour' button is clicked, the background color will be changed with the next color in the array.
The next color when you are in the last color of the array will be the first color again.
*/
let arrayColor = ["lightblue","darkseagreen","lightpink","lightseagreen","pink"]
let count=0
function changeColor(){
    let body = document.querySelector("body");
    body.style.backgroundColor = arrayColor[count];
   if (count < 5){
        count ++;
    } else {
        count = 0;
    }
}