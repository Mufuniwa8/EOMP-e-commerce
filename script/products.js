// const checkOut = document.getElementById(".nav_bar");


let boots = [
    {
        id: 1,
        image: "https://i.postimg.cc/HxGRFRSJ/IMG-1233.jpg",
        brand: "Adidas",
        model: "",
        price:  3700,
    },
    {
        id: 2,
        image: "https://i.postimg.cc/d1mHp1kX/IMG-1234.jpg",
        brand: "Adidas",
        model: "",
        price:  4000,
    },
    {
        id: 3,
        image: "https://i.postimg.cc/fbsYFvcz/IMG-1235.jpg",
        brand: "Nike",
        model: "",
        price:  3200,
    },
    {
        id: 4,
        image: "https://i.postimg.cc/zGzgFf8v/IMG-1237.jpg",
        brand: "Nike",
        model: "",
        price:  3000,
    },
];

let displayBoots = document.getElementById('boots');
boots.forEach((data) => {
    displayBoots.innerHTML += `
    
    <div class="container">
    
    <div class="checkOut">
    <div class="boots-images">
    <img src="${data.image}" alt="" class="pro-imgs border">
    </br>
    </div>
    <div class="brand">
    <h2>${data.brand}</h2>
    </div>
    <div class="model">
    <h2>${data.model}</h2>
    </div>
    <div class="price"
    <h2>Price: R${data.price}</h2>
    </div>
    <div>
     <button class="button" onclick="addToList">Add to Cart</button>
    </div>
    </div>
    
    </div>
    `;
//     let dispEducation = document.querySelector("education");
// education.forEach((data) => {
//   dispEducation.innerHTML += `
// <div class="card-body2">
//     <h4 class="display-5 year text-center">${data.year}</h4>
//     <h4 class="display-10 ">${data.desc}</h4>
//     </div>
//     </div>    
//     </div>`;

});

// array of t-shirts
let shirts = [
    {
        id: 5,
        image: "https://i.postimg.cc/HnVYTGpH/4828f51080cbd235e634a477bfe47beb.webp",
        brand: "Puma",
        model: "AC Milan kit",
        price:  1700,
    },
    {
        id: 6,
        image: "https://i.postimg.cc/K8tN22Py/HZ2133-01-laydown-removebg-preview.png",
        brand: "Adidas",
        model: "Arsenal kit",
        price:  1500,
    },
    {
        id: 7,
        image: "https://i.postimg.cc/4d5DJ09W/Juventus-New-Home-Jersey-2023-24-with-Yellow-removebg-preview.png",
        brand: "adidas",
        model: "Juventas Kit",
        price:  1500,
    },
    {
        id: 8,
        image: "https://i.postimg.cc/L5F3b4X7/images-removebg-preview.png",
        brand: "Castore",
        model: "Newcastle kit",
        price:  1000,
    },
];

let displayShirts = document.getElementById('shirts');
shirts.forEach((data) => {
    displayShirts.innerHTML += `
    
    <div class="container">
    
    <div class="checkOut">
    <div class="shirts-images border">
    <img src="${data.image}" alt="" class="pro-imgs">
    </br>
    </div>
    <div class="brand">
    <h2>${data.brand}</h2>
    </div>
    <div class="model">
    <h2>${data.model}</h2>
    </div>
    <div class="price"
    <h2>Price: R${data.price}</h2>
    </div>
    <div>
     <button class="button" onclick="addToList">Add to Cart</button>
    </div>
    </div>
    
    </div>
    `;
});

// end of array of t-shirts

// array of soccer balls

let balls = [
    {
        id: 9,
        image: "https://i.postimg.cc/xCqB6hLb/01gf8fr8dvh06xvazjgg.webp",
        brand: "Adidas",
        model: "2022/23 UEFA CL Ball",
        price:  800,
    },
    {
        id: 10,
        image: "https://i.postimg.cc/J0Yn99FV/serie-a-tab-min.jpg",
        brand: "Puma",
        model: "2022/23 Seria A Ball",
        price:  350,
    },
    {
        id: 11,
        image: "https://i.postimg.cc/c4T2NdT8/La-Liga-22-23-new-ball-1.jpg",
        brand: "Puma",
        model: "2022/23 La liga Ball",
        price:  4500,
    },
    {
        id: 12,
        image: "https://i.postimg.cc/T11mLqMx/FTHR7-Az-WQAAr8s5.jpg",
        brand: "Select",
        model: "2022/23 Bundesliga Ball",
        price:  400,
    },
];

let displayBalls = document.getElementById('balls');
balls.forEach((data) => {
    displayBalls.innerHTML += `
    <div class="container">
    
    <div class="checkOut">
    <div class="balls-images">
    <img src="${data.image}" alt="" class="pro-imgs border">
    </br>
    </div>
    <div class="brand">
    <h2>${data.brand}</h2>
    </div>
    <div class="model">
    <h2>${data.model}</h2>
    </div>
    <div class="price"
    <h2>Price: R${data.price}</h2>
    </div>
    <div>
     <button class="button" onclick="addToList">Add to Cart</button>
    </div>
    </div>
    
    </div>
    `;
});


    //  end of array of soccer balls

