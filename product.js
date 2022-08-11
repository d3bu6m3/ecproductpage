const cartItem = document.querySelector('.cart-item');
let productDefault = "<div class='cart-item-wrapper'><div class='item-details'><p>Your cart is empty</p></div></div>";
let product ="<div class='cart-item-wrapper'><a class='cart-item-image' href='#'><img src='images/image-product-1-thumbnail.jpg' alt='image-product-1-thumbnail'/></a><div class='item-details'><p class='item-description'>Autumn Limited Edition..</p><p class='item-price'>$125.00 x 3 <span>$375.00</span></p></div><a href='#' class='item-action' onclick='deleteToCart()'><img src='images/icon-delete.svg' alt='delete button'></a></div><div class='cart-item-button'><button class='button'>Checkout</button></div>";

function plusItem(n) {

}

function addToCart() {
    cartItem.innerHTML = product;
}

function deleteToCart() {
    cartItem.innerHTML = productDefault;
}