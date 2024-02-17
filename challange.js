// let productNameInputElement = document.getElementById('product-name');
// let remainingCharsElement = document.getElementById('remaining-chars');

// function updateRemainingChars(event){
//     let enteredText = event.target.value;
//     let enteredTextLength = enteredText.length;
    

//     let remainingChar = 60 - enteredTextLength; 

// }

// productNameInputElement.addEventListener('input',updateRemainingChars ); 

// IF WE DO NOT WANNA WRITE EXACT VALUE (60)


let productNameInputElement = document.getElementById('product-name');
let remainingCharsElement = document.getElementById('remaining-chars');

// console.dir(productNameInputElement);
let maxAllowedChars = productNameInputElement.maxLength;
function updateRemainingChars(event){
    let enteredText = event.target.value;
    let enteredTextLength = enteredText.length;
    
 let remainingChar = maxAllowedChars - enteredTextLength;
 remainingCharsElement.textContent = remainingChar;
 if ( remainingChar <= 10 ) {
    remainingCharsElement.classList.add('warning');
    productNameInputElement.classList.add('warning');

 } 
 else {
   remainingCharsElement.classList.remove('warning');
    productNameInputElement.classList.remove('warning');
 }
}


productNameInputElement.addEventListener('input',updateRemainingChars );