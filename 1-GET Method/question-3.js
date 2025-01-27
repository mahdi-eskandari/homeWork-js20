/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// const article = document.querySelector("article");

// ! Answer


async function request() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw "error !!!!!!!!!!";
        }

        const data = await response.json();
        console.log(data);

        displayData(data);

    } catch (error) {
        console.error(error);
    }
}
request()


const container = document.querySelector("#container")

function displayData(products) {
    products.forEach(product => {

        const card = document.createElement("div")
        card.classList.add("style_card")


        const p_name = document.createElement("p")
        p_name.classList.add("para_name")
        p_name.textContent = `name: ${product.name}`

        const p_company_name = document.createElement("p")
        p_company_name.classList.add("para_company_name")
        p_company_name.textContent = `company name: ${product.company.name}`

        container.appendChild(card)
        card.appendChild(p_name)
        card.appendChild(p_company_name)
    });
}