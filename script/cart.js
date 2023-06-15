//  let array1 = []
//  function addToList(boots, shirts, balls){

//  }
const bootsEl = document.querySelector("#boots");
const productItems = document.querySelector("#shop");

// function renderBoots(){
//   boots.forEach((boots, shirts, balls) =>{
// bootsEl.innerHTML += `

// function updateCart() {
//   const cartElement = document.getElementById("shop");
//   cartElement = ""
//   ;
//   shop.forEach((boots) => {
//     const cartItem = document.createElement("div");
//     productItem.innerHTML += `
// <div class="checkout-products">
// <div class="img-products">
//   <img id="pro-img" class="img-size" src="${boots.image}" alt="">
// </div>
// <div class="titles">
//   <h2 class="brand">${boots.brand}</h2>
//   <br>
//   <h4 class="model">${boots.model}</h4>
// </div>
// <div class="add">
//   <div class="add-btn">+</div>
//   <div class="value">num</div>
//   <div class="add-btn">-</div>
// </div>
// <div class="product-price">
//   <span class="price">${boots.price}</span>
//   <button onclick= "calc(${boots.price})"></button>
//   <div class="can"><i class="fa-solid fa-trash-can" style="color: black"></i></div>
// </div>
// </div>
// `;

//   });
// }

//  function renderBoots(){
//    boots.forEach((boots, shirts, balls) =>{
// bootsEl.innerHTML +=
// const shop = [];
renderShop()
function renderShop(){
  // productItems.innerHTML = '';
  productItems.innerHTML = ''
  cart.forEach((item) => {
      productItems.innerHTML += `
        <div id="shop" class="checkout-products">
        
          <div class="img-products">
            <img id="pro-img" class="img-size" src="${item.image}" alt="">
          </div>
          <div class="titles">
            <h2 class="brand">${item.brand}</h2>
            <br>
            <h4 class="model">${item.model}</h4>
          </div>
          <div class="add">
            <div class="add-btn">+</div>
            <div class="value">${item.value}</div>
            <div class="add-btn">-</div>
          </div>
          <div class="product-price">
            <div class="price-cart">${item.price}</div> 
            <button onclick="clearItem(${item.id})" class="can"><i class="fa-solid fa-trash-can" style="color: black"></i></button>
          </div>
          
        </div>
      `
  });
}

// let boots = JSON.parse(localStorage.getItem("cart"));
// if (!cart) {
//   cart = [];
//   localStorage.setItem("cart", JSON.stringify(cart));
// }

// // Shopping cart
// function updateCart() {
//   const cartElement = document.getElementById("shop");
//   shop.forEach((product) => {
//     const cartItem = document.createElement("div");
//     cartItem.innerHTML = `
    

{/* <div class="checkout-products">
<div class="img-products">
  <img id="pro-img" class="img-size" src="${boots.image}" alt="">
</div>
<div class="titles">
  <h2 class="brand">${boots.brand}</h2>
  <br>
  <h4 class="model">${boots.model}</h4>
</div>
<div class="add">
  <div class="add-btn">+</div>
  <div class="value">num</div>
  <div class="add-btn">-</div>
</div>
<div class="product-price">
  <span class="price">${boots.price}</span>
  <button onclick= "calc(${boots.price})"></button>
  <div class="can"><i class="fa-solid fa-trash-can" style="color: black"></i></div>
</div>
</div>
//  */}

//     `;

//     cartElement.appendChild(cartItem);
//   });
// }

// // Function to save cart to localStorage
// const saveCartToLocalStorage = () => {
//   localStorage.setItem("cart", JSON.stringify(cart));
// };

// // Function to retrieve cart from localStorage (if available)
// const retrieveCartFromLocalStorage = () => {
//   if (localStorage.getItem("cart")) {
//     cart = JSON.parse(localStorage.getItem("cart"));
//     cart.forEach((boots) => {
//       updateCart(boots); 
//     });
//   }
// };

// function addToCart(productId) {
//   const product = products.find((product) => product.id === productId);
//   if (product) {
//     cart.push(product);
//     product.quantity++;
//     saveCartToLocalStorage();
//     updateCart();
//   }
// }

// retrieveCartFromLocalStorage();
// updateCart();

//
// let array = [];
//  {("boots", "shirts", "balls")};
//  updateCart();
//  function addToList() {

//  }
// let displayArray1 = document.getElementById("array1");
// array1.forEach((data) => {
//     function addToList() {
        
//         let  {id, image, brand, model, price} = array1;
//         let displayArray1 = document.getElementById("array1");
//         displayArray1.innerHTML += `
//           <div class="checkout-container">
//           <button class="del-button" onclick="del()">Clear Cart</button>
//           <div class=" id="checkout-products" class="checkout-products">
//           <div class="img-products">
//           <div class="img-size">
//           <img src="${data.image}" alt="" class="img-size" >
//           </br>
//           <div class="titles">
//                         <h2 id="brand" class="brand"></h2>
//                         <br>
//                         <h4 id="model" class="model"></h4>
//                       </div>
//           </div>
//           <div class="brand">
//           <h2>${data.brand}</h2>
//           </div>
//           <div class="model">
//           <h2>${data.model}</h2>
//           </div>
//           <div class="price"
//           <h2>Price: R${data.price}</h2>
//           </div>
//           <div class="price"
//           <h2>Price: R${data.price}</h2>
//           </div>
//           <div class="add">
//           <div onclick="add()" class="add-btn">+</div>
//           <div id="quantity" class="value">num</div>
//           <div onclick="minus()" class="add-btn">-</div>
//         </div>
//         <div class="product-price">
//           <div id="product-price" class="price">345</div>
//           <div class="can"><i class="fa-solid fa-trash-can" style="color: black"></i></div>
//         </div>
//           </div>
          
//           </div>
//           `;
//         }
//         });

// function modal() {
//     let data = document.createElement("checkout-products");
// }

// let array =
// ["boots", "shirts", "balls"];
