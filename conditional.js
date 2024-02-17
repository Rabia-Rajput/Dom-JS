const myName = 'Rabia';
if (myName === 'Rabia') {
    
    console.log('Hey');
}
let isLoggedIn = true;

if(!isLoggedIn){
    console.log('user is not logged in!');
}
const enteredUserName ='Rabia';// empty string ( '' )and 0 both consider false
if(enteredUserName.length > 0){
    console.log('input is valid');
}