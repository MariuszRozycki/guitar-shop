const guitarsContainer = document.querySelector('.product-list');

for (let i = 0; i < products.length; i++) {
  let productLink = `<a href="product-specific.html?id=${products[i].id}" class="cta cta-small">View</a>`;
  if (products[i].sales) productLink = `<a href="product-specific.html?id=${products[i].id}" class="cta cta-small cta-sale">On Sale</a>`;

  guitarsContainer.innerHTML +=
    `<div class="products">
      <div>
        <img src="${products[i].image}" alt="${products[i].name}" />
      </div>
      <h2>${products[i].name}</h2>
      <p>${'$' + products[i].price}</p>
      ${productLink}
    </div>
  </section>`
}