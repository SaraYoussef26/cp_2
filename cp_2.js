function fetchProductsThen() {
    fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })

    .then(data => {
        data.forEach(product =>{
            console.log(product.fields.name);
        });
    
    })

        .catch(error => {
            handleError(error);
        });
    
    }

//Step 4
async function fetchProductsAsync() {
        try {
            const response = await fetch('https://www.course-api.com/javascript-store-products');
         if (!response.ok) {
            throw new Error (`HTTP error! status: ${response.status}`);
        }
        const products = await response.json ();
        displayProducts(products);
        } catch (error) {
            handleError(error);
        }
}

//Step 5
function displayProducts(products){
    const container = document.querySelector("#product-container");
    const firstFiveProducts = products.slice(0,5);
    if (firstFiveProducts.length===0) {
        container.innerHTML='<div class="loading">No products found.</div>';
        return; 
    }
    const productHTML = firstFiveProducts.map(product =>
    {
        return createProductCard(product);
    }).join('');
    container.innerHTML = productHTML;
}

function createProductCard(product) {
    const{name, price, image}= product.fields;
    const imageURL = image [0].url;
    return `
    <div class="product-card" data-id="${product.id}">
        <div class="product-image-container">
            <img src="${imageURL}" alt="${name}"
class="product-image">
        </div>
        <div class="product-info">
        <h3 class="product-name">${name}</h3> 
        <p class="product-price">$${ (price /
100) . toFixed (2)}</p>
            </div>
        </div>
        `;
        }


//Step 6
function handleError(error) {
    console.error('An error occurred: ${error.message}');
}

//Step 7
fetchProductsThen();
fetchProductsAsync();
