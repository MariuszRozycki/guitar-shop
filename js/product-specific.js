const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const productId = params.get("id");
const productContainer = document.querySelector(".product-specific");

const product = products.find(({ id }) => id == productId);

productContainer.innerHTML = `<section>
  <figure>
    <img src="${product.image}" alt="${product.name}" class="product-image" />
  </figure>
  <div class="product-image_thumbnails">
    <figure>
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </figure>
    <figure>
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </figure>
    <figure>
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </figure>
    <figure>
      <img src="${product.image}" alt="${product.name}" class="product-image" />
    </figure>
  </div>
</section>
<section class="product-specific__details">
  <h1>${product.name}</h1>
  <p>${product.description}</p>
  <p class="product-specific__price">${'$' + product.price}</p>
  <a href="../contact.html" class="cta cta-large">Contact Us</a>
`;