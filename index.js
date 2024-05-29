const productsContainer = document.querySelector(".products-container")

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart))
};

const createProductTemplate = (product) => {
    const {id, titulo, imagen, categoria, precio} = product
    // Nos va a retornar el card del producto
    return ` 
    <div class="product">
        <img src=${imagen} alt=${titulo} />
        <div class = "product-info">
            <div class="product-top">
                <h3>${titulo}</h3>
            </div>

            
        </div>
    </div>`
}

const renderProducts = (productsList) => {
    productsContainer.innerHTML += productsList.map()
}


const init = () => {

};

init();