/* Return tag with class '.featured' */
const productContainer = document.querySelector('.featured');
console.log(productContainer);

/* In tag class=".featured" finding of separate product with featured === true and sales === true */
for (let i = 0; i < products.length; i++) {
  if (products[i].featured === true) {
    let productLink = `<a href="product.html?id=${products[i].id}" class="cta cta-small">View</a>`;
    if (products[i].sales === true) {
      productLink = `<a href="product.html?id=${products[i].id}" class="cta cta-small cta-sale">On Sale</a>`;
    }
    /* creating div class=".products" inside section '.featured' */
    productContainer.innerHTML += `<div class=".products">
    <img src="${products[i].image}" alt="${products[i].name}" />
    <h3>${products[i].name}</h3>
    <p>${products[i].price + '$'}</p>
    ${productLink}
    </div>`
  }
}
