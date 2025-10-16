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
    

        
    