
let listProducts = document.getElementById("list-product")







function render() {
    let products = JSON.parse(localStorage.getItem("products"));

    let stringHTML = ``;

    for (let i in products) {
        stringHTML += `<div>
        <a onclick="changePagesItem(${products[i].id})"><img class="img-hover"
                src="${products[i].image}"
                alt="">
            <div>
                <p>${products[i].name}</p>
                <p>${products[i].price}</p>

            </div>
        </a>
    </div>
    `}
    listProducts.innerHTML = stringHTML;
    
}

render();

function changePagesItem(id){
    
    let products =JSON.parse(localStorage.getItem("products"))||[];
    let productIndex= products.findIndex((item)=> item.id=== id);
    let productsObject={};
    productsObject.id=products[productIndex].id;
    localStorage.setItem("product_detail",JSON.stringify(productsObject));
    window.location.href="../pages/listitems.html";
}