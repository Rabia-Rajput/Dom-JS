


// document.body.children[1].children[0].href = "http://google.com";


// console.dir(document);
// alert();
//window.alert(); line 3 and 4 will work same 
//in console if we write document.body.firstChild then html text (empty spaces) will show
//documment.body.firstElementChild then h1 will show
//if write document.body.chlidNodes then entire html code will display

//document.getElementById("external-link").href = "http://google.com"; OR LINE 9 and 10
// let anchorElement = document.getElementById("external-link");
// anchorElement.href = "http://google.com";


// let anchorElement = document.querySelector("a");
// anchorElement.href = "http://google.com"; (a) sleceting by html element type like as we did in css a{}

// ADD NEW ELEMENT
// 1: Create New Element

let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "  this leads to Google";
// 2: Get access to the parent element that should hold the new element
let firstParagarah = document.querySelector("p");
// 3: Insert the new element into the parent element content
firstParagarah.append(newAnchorElement);


// REMOVE Elements

let firstH1Element = document.querySelector('h1');

//remove it!

firstH1Element.remove();

//firstH1Element.parentElement.removeChild(firstH1Element); //for older browser

// Move Elements

firstParagarah.parentElement.append(firstParagarah);


//innerHTML

firstParagarah.innerHTML = 'hey! this is <strong>important</strong>';
