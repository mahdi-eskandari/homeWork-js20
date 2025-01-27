//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */


//*End of story :)



/*------------------- one ---------------------*/


function deleteFamilyNum(numbers) {

    numbers.forEach(id => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'DELETE'
        }).then((response) => {
            if (response.ok) {
                return console.log(`Employee with ID ${id} deleted successfully`);
            }
            else {
                throw console.log(`Failed to delete employee with ID ${id}`);
            }
        }).catch((error) => {
            console.error(error);
        })
    });

}

deleteFamilyNum([2, 5, 8])


/*------------------- two ---------------------*/


async function deleteUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()

        const deleteUser = data.filter((user) => {
            return user.id % 2 === 0
        })
        console.log(`yep`);
        console.log(deleteUser);
    } catch (error) {
        console.error(`ERROR !!!!!`, error);
    }

}
deleteUser()