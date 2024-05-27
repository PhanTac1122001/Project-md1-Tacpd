
let showItem = document.getElementById("main-title")


let slideIndex = 1;


function render() {
  let products = JSON.parse(localStorage.getItem("products")) || [];
  let productsDetail = JSON.parse(localStorage.getItem("product_detail")) || [];
  let productIndex = products.findIndex((item) => item.id === productsDetail.id);

  let stringHTML = ``;


  stringHTML += `<div class="main-item">
        <img class="mySlides" width="100%" src="${products[productIndex].image}" alt="">
        
        <div>
            <button class="btn-divs-left" onclick="plusDivs(-1)">&#10094;</button>
        <button class="btn-divs-right" onclick="plusDivs(1)">&#10095;</button>
    </div>
        </div>
    <div class="main-title">
        <p>${products[productIndex].name}</p>
        <b>${products[productIndex].price}</b>
        <label>Color:${products[productIndex].color}</label>
        <p>Features:
        </p>
        <div>
            Size:
            <label>${products[productIndex].size}</label>
        </div>

        <b>Hướng dẫn sử dụng:</b>
        <b>Chính sách đổi trả:</b>
        <button>Thêm giỏ hàng</button>
    </div>
    `
  showItem.innerHTML = stringHTML;

}
render()


showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  let x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}