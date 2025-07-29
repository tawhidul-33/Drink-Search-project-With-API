//for search
const search_box = document.getElementById("search-button");
search_box.addEventListener("click", () => {
    search_drink_manu()
});

//search diye show korar jonno
const search_drink_manu = () => {
    const search_button = document.getElementById("search-box").value;
    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    if (search_button === "") {//jodi faka search diya hoy
        mainContainer.innerHTML = `<h2>Please type something to search</h2>`;
        alert("seaech box empty")
        return; // stop function here
    }

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search_button}`)
        .then(res => res.json())
        .then(product => {
            if (product.drinks) {
                product.drinks.forEach(data => {
                    const div = document.createElement("div");
                    div.classList.add("cart");
                    div.innerHTML = `
                    <img src="${data.strDrinkThumb}" alt="...img not found">
                    <h5><strong>Name: ${data.strDrink}</strong></h5>
                    <h5>Category: ${data.strCategory}</h5>
                    <h6>Instructions: ${data.strInstructions.slice(0, 20)}...</h6>
                    <button class="cbtn" onclick="showDetails_forSingleCart('${data.idDrink}')">details</button>
                    <button class="cbtn" id="${data.idDrink}" onclick="handleAddToCard('${data.strDrinkThumb}','${data.strDrink}','${data.idDrink}')">Add to Cart</button>
                 `;

                    mainContainer.appendChild(div)
                })
            } else {
                mainContainer.innerHTML = `<h1><strong>Drink not found</strong></h1>`
            }

        }).catch(err => {
            mainContainer.innerHTML = `<p>Something went wrong</p>`;
        })
    document.getElementById("search-box").value = "";
};



//defult show korar jonno
const drink_manu = () => {
    // const search_button = document.getElementById("search-box").value;
    const mainContainer = document.getElementById("main-container");
    mainContainer.innerHTML = "";

    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
        .then(res => res.json())
        .then(product => {
            if (product.drinks) {
                product.drinks.forEach(data => {
                    const div = document.createElement("div");
                    div.classList.add("cart");
                    div.innerHTML = `
                    <img src="${data.strDrinkThumb}" alt="...img not found">
                    <h5><strong>Name: ${data.strDrink}</strong></h5>
                    <h5>Category: ${data.strCategory}</h5>
                    <h6>Instructions: ${data.strInstructions.slice(0, 20)}...</h6>
                    <button class="cbtn" onclick="showDetails_forSingleCart('${data.idDrink}')">details</button>
                    <button class="cbtn" id="${data.idDrink}" onclick="handleAddToCard('${data.strDrinkThumb}','${data.strDrink}','${data.idDrink}')">Add to Cart</button>
                 `;

                    mainContainer.appendChild(div)
                })
            } else {
                mainContainer.innerHTML = `<h1><strong>Drink not found</strong></h1>`
            }

        }).catch(err => {
            mainContainer.innerHTML = `<p>Something went wrong</p>`;
        })
    document.getElementById("search-box").value = "";
};
drink_manu();



//show details for Single Cart
showDetails_forSingleCart = (id) => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
        .then(Response => Response.json())
        .then(products => {
            const modalBody = document.getElementById("modal-body");
            const modalTitle = document.getElementById("modal-title")

            const product = products.drinks[0]; // ekta meal pabe
            modalTitle.innerHTML = `<h4>${product.strDrink}</h4>`;
            modalBody.innerHTML = `
                    <img class="dimg" src="${product.strDrinkThumb}" alt="...img not found">
                    <h5>Category: ${product.strCategory}</h5>
                    <h6>Alcoholoc: ${product.strAlcoholic}</h6>
                    <p>${product.strInstructions}</P>
                    
                    `;


            // show modal (optional, if you're using bootstrap modal)
            const productModal = new bootstrap.Modal(document.getElementById('modal'));
            productModal.show();

        })
};

//
const handleAddToCard = (img, name, id) => {
    //cart count
    const cartCount = document.getElementById("count").innerText;
    let convertedCount = parseInt(cartCount);

    if (convertedCount > 6) {
        alert("You limit cross to Add");
        return;
    }

    const clickedButton = document.getElementById(id);
    if (clickedButton.innerText == "Already Added") {
        return;
    } else {
        clickedButton.innerText = "Already Added";
        clickedButton.style.backgroundColor = "#FFB6C1";

        convertedCount = convertedCount + 1;
        document.getElementById("count").innerText = convertedCount;
        //cart vew
        const cartElementContainer = document.getElementById("cart-element-container");
        const div = document.createElement("div");
        div.classList.add("d-flex", "justify-content-around")
        div.innerHTML = `
    <h5>${convertedCount}</h5>
    <img class="crdImg" src="${img}" alt="...">
    <p>${name}</p>
   `;
        cartElementContainer.appendChild(div);


    }


};
