//a callback is a function that is passed into another function
//and then called inside that function to complete some sort of routine or action
const button = document.querySelector('button')
function toggle(){
    button.classList.toggle('altColor')
}
// toggle()
button.addEventListener('click',toggle)