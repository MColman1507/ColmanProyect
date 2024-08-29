//Alerta de carro vacío//

let cart = document.getElementById("cart-shop")

cart.addEventListener("click", () => {
    window.alert("Your cart is empty");
})

//Aceptar cookies//

let accept = document.getElementById("accept")
let cookies = document.getElementById("cookies")

accept.addEventListener("click", () => {
    cookies.style.display="none";
})

//Cambiar imagen con hover//

let img = document.getElementById("img")

img.addEventListener("mouseover", () => {
    img.setAttribute("src", "./img/assets/succulents-2.jpg")
})

img.addEventListener("mouseleave", () => {
    img.setAttribute("src", "./img/assets/succulents-1.jpg")
})