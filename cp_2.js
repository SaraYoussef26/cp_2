function fetchProductsThen() {}
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error ('HTTP error! status: ${response.status}');
        }
        return response.json();
    })

    .then(data => {
        data.forEach(product =>{
            console.log(product.name);

        })
    
    })

        .catch(error => {
            console.error('Fetch error:', error);
        });

//Step 4
async function fetchProductsAsync() {
        try {
            const response = await fetch('https://www.course-api.com/javascript-store-products');
         if (!response.ok) {
            throw new Error ('HTTP error! status: ${response.status}');
        }
        const products = await response.json ();
        displayProducts(product);
        } catch (error) {
            handleError(error);
        }
}

//Step 5
function displayProducts(products){
    const container = document.querySelector("#product-container");
    container.innerHTML=" ";
    const firstFiveProducts = products.slice(0,5);
    if (firstFiveProducts.length===0) {
        container.innerHTML='<div class="loading">No products found.</div>';
        return; 
    }
    firstFiveProducts.forEach(product=> {
        const productCard = createProductCard(product);
        container.appendChild(productCard);
    });
    }


function createProductCard(product) {
    const card = document.createElement("div"); 
    card.className= "product-card";
    const{name, price, image}= product.fields;
    const imageURL = image [0].url;
    card.innerHTML =`
    <img src="${imageUrl}" alt="${name}" class="product-image">
        <div class="product-info">
            <h3 class="product-name">${name}</h3>
            <p class="product-price">$${(price / 100).toFixed(2)}</p>
        </div>
    `;
    
return card;
}

//Step 6
function handleError(error) {
    console.error('An error occurred: ${error.message}');
}