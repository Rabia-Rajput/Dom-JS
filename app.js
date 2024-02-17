let paragraphElement = document.querySelector('p');
function changeParagrahText(){
    paragraphElement.textContent = 'Clicked!';
    //console.log('Paragraph Clicked');to check how many times button clicked in console
}
 paragraphElement.addEventListener('click', changeParagrahText);

// let inputElement = document.querySelector('input');
// function retriveUserInput(){
//     let enteredText = inputElement.value;
//     console.log(enteredText);
// }

// inputElement.addEventListener('input' , retriveUserInput);




let inputElement = document.querySelector('input');
function retriveUserInput(event){
    let enteredText = event.target.value; // always give full value what we entered a complete word or sentence
   // let enteredText = event.data; show as concrete data //THIS IS DIFFERENT THAT TARGET AND INPUTELEMENT VALUE
    console.log(enteredText);
     
    // console.log(event);
}

inputElement.addEventListener('input' , retriveUserInput);