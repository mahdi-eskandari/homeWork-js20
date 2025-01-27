// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.

/** WRITE YOUR CODE BELOW DOWN */

const users = [
    {
        firstName: "Grattan",
        lastName: "Dalton"
    },
    {
        firstName: "William",
        lastName: "Dalton"
    },
    {
        firstName: "Robert",
        lastName: "Dalton"
    },

];


// async function request(users) {

//     for (const user of users) {
//         try {
//             const response = await fetch("https://678fc48249875e5a1a934a09.mockapi.io/api/User/mahdi", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(user)
//             })

//             const data = await response.json()
//             console.log("users added", data);
//         } catch (error) {
//             console.error("ERROR", error);
//         }
//     }
// }
// request(users)

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...

const form = document.querySelector("form")

form.addEventListener("submit", async function request(event) {
    event.preventDefault();

    const firstName = document.getElementById("fName").value;
    const lastName = document.getElementById("lName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;

    const userData = {
        firstname: firstName,
        lastname: lastName,
        phonenumber: phoneNumber
    };

    try {
        const response = await fetch("https://678fc48249875e5a1a934a09.mockapi.io/api/User/mahdi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const data = await response.json()
        console.log("User signed up:", data)

        alert("User successfully signed up!"); /*  برای تست موفقیت  */
    } catch (error) {
        console.error(error)
        alert("There was an error during signup");
    }
});
