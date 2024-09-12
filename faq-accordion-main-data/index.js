import {data} from "./data.js"



let faqHTML = ""
const questionContainers = document.querySelectorAll('.container')
console.log(questionContainers)

questionContainers.forEach((container) => {
    let matchingContainer = ""
    let matchingQuestion = ""
    let matchingAnswer = ""
    data.forEach((dataitem) => {
        if(container.id === dataitem.id){
            matchingContainer = container
            matchingQuestion = dataitem.question
            matchingAnswer = dataitem.message
        }
    })
    faqHTML +=
   
            `<span><li>${matchingQuestion}<img src="./assets/images/icon-plus.svg"></li></span>
            <div class="answer">${matchingAnswer}</div>`
})
document.querySelector('.Questions-List').innerHTML = faqHTML;

const answerDivs = document.querySelectorAll('.answer')
answerDivs.forEach((answerdiv) => {
    answerdiv.style.color = "hsl(292, 16%, 69%)"
    answerdiv.style.fontWeight = "600"
    answerdiv.style.padding = "5px"
    answerdiv.style.visibility = "hidden"
})


const buttonImages = document.querySelectorAll('li img')
buttonImages.forEach((button) => {
    button.addEventListener('click',function(){
        // this.src = "./assets/images/icon-minus.svg"

        
        const parentSpan = this.closest('span')
        const answerDiv = parentSpan.nextElementSibling
        // answerDiv.classList.toggle('show')

        //the show class has set the visibility to hidden 
        if(answerDiv.style.visibility === "hidden"){
            this.src = "./assets/images/icon-minus.svg"
            answerDiv.style.visibility = "visible"

        }
        else {
            this.src = "./assets/images/icon-plus.svg"
             answerDiv.style.visibility = "hidden"

        }
        

        })
        
        
 })


        
   

