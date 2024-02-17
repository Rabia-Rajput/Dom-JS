for (let i = 0; i < 10; i++){
    console.log(i);
}
const users = ['Anna', 'Rabia', 'Zeeshan'];

for (const user of users){
    console.log(user);
}

const loggedInUser = {
    name:'Rabia',
    age : 24,
    isAdmin:true

};
for( const key in loggedInUser){
    console.log(key);
    console.log(loggedInUser[key]);
}
