//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */



//*To be continue...


const updatedUser = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phoneNumber: "(945) 635-3854"
}
fetch('https://jsonplaceholder.typicode.com/users/1', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(updatedUser)
}).then(response => response.json())
    .then((data) => {
        console.log(`user updated: `, data);
    }).catch((error) => {
        console.error(`error updating:`, error);
    })
