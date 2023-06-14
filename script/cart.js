//  let array1 = []
//  function addToList(boots, shirts, balls){

//  }

let cart = JSON.parse(localStorage.getItem("cart"));
if (!cart) {
  cart = [];
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Shopping cart
function updateCart() {
  const cartElement = document.getElementById("cart");
  cart.forEach((product) => {
    const cartItem = document.createElement("div");
    cartItem.innerHTML = `
    
    <ul class="list-group mb-3">
    <li class="list-group-item d-flex justify-content-between lh-sm">
    <div>
    <h6 class="my-0">${product.model}</h6>
    <small class="text-body-secondary">${product.brand}</small>
    </div>
    <span class="text-body-secondary">R ${product.price}</span>
    <button onclick= "calc(${product.price})"></button>
    </li>

    </ul>
    `;

    cartElement.appendChild(cartItem);
  });
}

// Function to save cart to localStorage
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to retrieve cart from localStorage (if available)
const retrieveCartFromLocalStorage = () => {
  if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.getItem("cart"));
    cart.forEach((product) => {
      updateCart(product); 
    });
  }
};

function addToCart(productId) {
  const product = products.find((product) => product.id === productId);
  if (product) {
    cart.push(product);
    product.quantity++;
    saveCartToLocalStorage();
    updateCart();
  }
}

retrieveCartFromLocalStorage();
updateCart();

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
