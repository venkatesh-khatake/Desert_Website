const Desert_List = [
    {
        "category" : "Baklava",
        "name" : "Pistachio Baklava",
        "price" : 4.50,
        "image" : "images/image-baklava-desktop.jpg"
    },
    {
        "category" : "Brownie",
        "name" : "Salted Caramel Brownie",
        "price" : 5.50,
        "image" : "images/image-brownie-desktop.jpg"
    },
    {
        "category" : "Cake",
        "name" : "Red Velvet Cake",
        "price" : 5.50,
        "image" : "images/image-cake-desktop.jpg"
    },
    {
        "category" : "Creme Brulee",
        "name" : "Vanilla Bean Creme Brulee",
        "price" : 7.5,
        "image" : "images/image-creme-brulee-desktop.jpg"
    },
    {
        "category" : "Macaron",
        "name" : "Macaron Mix of Five",
        "price" : 8.5,
        "image" : "images/image-macaron-desktop.jpg"
    },
    {
        "category" : "Pie",
        "name" : "Lemon Meringue Pie",
        "price" : 5.70,
        "image" : "images/image-meringue-desktop.jpg"
    },
    {
        "category" : "Panna Cotta",
        "name" : "Vanilla Panna Cotta",
        "price" : 6.50,
        "image" : "images/image-panna-cotta-desktop.jpg"
    },
    {
        "category" : "Tiramisu",
        "name" : "Classic Tiramisu",
        "price" : 5.50,
        "image" : "images/image-tiramisu-desktop.jpg"
    },
    {
        "category" : "waffle",
        "name" : "Waffle with Berries",
        "price" : 7.50,
        "image" : "images/image-waffle-desktop.jpg"
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
              <button> <i class="fa-solid fa-cart-shopping"></i>Add to Cart</button>

              <div class="details">
                <h5>${postData.category}</h5>
                <h4>${postData.name}</h4>
                <h6>$,${postData.price}</h6>
              </div>
        ` 
        postContainer.appendChild(postElement);
    })
}
postMethods();