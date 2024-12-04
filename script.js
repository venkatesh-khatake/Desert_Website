const Desert_List = [
    {
        "category" : "Baklava",
        "name" : "Pistachio Baklava",
        "price" : 4.50,
        "image" : "image-baklava-desktop.jpg"
    },
    {
        "category" : "Brownie",
        "name" : "Salted Caramel Brownie",
        "price" : 5.50,
        "image" : "image-brownie-desktop.jpg"
    },
    {
        "category" : "Cake",
        "name" : "Red Velvet Cake",
        "price" : 5.50,
        "image" : "image-cake-desktop.jpg"
    },
    {
        "category" : "Creme Brulee",
        "name" : "Vanilla Bean Creme Brulee",
        "price" : 7.5,
        "image" : "image-creme-brulee-desktop.jpg"
    },
    {
        "category" : "Macaron",
        "name" : "Macaron Mix of Five",
        "price" : 8.5,
        "image" : "image-macaron-desktop.jpg"
    },
    {
        "category" : "Pie",
        "name" : "Lemon Meringue Pie",
        "price" : 5.70,
        "image" : "image-meringue-desktop.jpg"
    },
    {
        "category" : "Panna Cotta",
        "name" : "Vanilla Panna Cotta",
        "price" : 6.50,
        "image" : "image-panna-cotta-desktop.jpg"
    },
    {
        "category" : "Tiramisu",
        "name" : "Classic Tiramisu",
        "price" : 5.50,
        "image" : "image-tiramisu-desktop.jpg"
    },
    {
        "category" : "waffle",
        "name" : "Waffle with Berries",
        "price" : 7.50,
        "image" : "image-waffle-desktop.jpg"
    }
];




const postContainer = document.querySelector("#card-box");
const postMethods = () =>{
    Desert_List.map((postData) => {
        const postElement = document.createElement('div');
        postElement.classList.add('cards');
        postElement.innerHTML = `
            <div class="img-box">
            <img src="${postData.image}" alt="${postData.name}">
              </div>
              <button class = "add-to-cart"> <i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>

              <div class="details">
                <h5>${postData.category}</h5>
                <h4>${postData.name}</h4>
                <h6>$ ${postData.price.toFixed(2)}</h6>
              </div>
        ` 
        postContainer.appendChild(postElement);
    })
}
postMethods();


// ========================================================

document.querySelector("#card-box").addEventListener("click",(e) =>{
    if(e.target.classList.contains("add-to-cart")){
        const card = e.target.closest(".cards");

        const name = card.querySelector("h4").textContent;
        const price = card.querySelector("h6").textContent;

        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-items");
        cartItem.innerHTML = `
            <div class = "items">
                <h5>${name}</h5>
                <h6>${price}</h6>
            </div>
            <i class="fa-solid fa-xmark remove-item"></i>
        `;
        document.querySelector(".cart-details").appendChild(cartItem);
    }
});

document.querySelector(".cart-details").addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-item")) {
            e.target.closest(".cart-items").remove();
        }
     });

    //  ==========================================================


