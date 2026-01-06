console.log("script running");

let totalIncent = 0;


// TODO: Fix this bug - should select #apple, not #banana!
const stickerButton  = document.querySelector("#sticker");
const keychainButton = document.querySelector("#keychain");
const plushButton = document.querySelector("#plush");
const comicButton = document.querySelector("#comic");
const mysteryButton = document.querySelector("#mystery");
const shoppingCart = document.querySelector("#shopping-cart");
const totalSpan = document.querySelector("#total-span");




console.log(stickerButton, keychainButton, plushButton, comicButton, mysteryButton, shoppingCart, totalSpan);

const updateTotal  = () => {
  totalSpan.innerHTML = totalIncent / 100;
};

const addSticker = () => {
  shoppingCart.innerHTML += '<p>Sticker</p>';
  totalIncent += 50;
  updateTotal();
};

stickerButton.addEventListener("click", addSticker);

 const addKeychain = () => {
  shoppingCart.innerHTML += '<p>Keychain</p>';
  totalIncent += 150;
  updateTotal();
 };

keychainButton.addEventListener("click", addKeychain);

const addPlush = () => {
  shoppingCart.innerHTML += '<p>Plush</p>';
  totalIncent += 400 ;
  updateTotal();
};
plushButton.addEventListener("click", addPlush);

 const addComic = () => {
  shoppingCart.innerHTML += '<p>Comic</p>';
  totalIncent += 275;
  updateTotal();
 };

comicButton.addEventListener("click", addComic);

const addMystery = () => {
  shoppingCart.innerHTML += '<p>Mystery</p>';
  totalIncent += 325 ;
  updateTotal();
};
mysteryButton.addEventListener("click", addMystery);  




