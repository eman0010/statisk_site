const productContainer = document.querySelector("#productContainter");

fetch(`https://kea-alt-del.dk/t7/api/products/`)
  .then((response) => response.json())
  .then((data) => showList(data));

function showList(products) {
  console.log(products);
  let markup = "";
  products
    .map((product) => {
      markup += `<article class="product">
          <img src="img/blue_t.webp" alt="Blå t-shirt" />
          <h3>${product.productdisplayname}</h3>
          <p>Tshirts | Nike</p>
          <p>DKK 1595,-</p>
          <a href="product.html">Read more</a>
        </article>`;
    })
    .join("");
  console.log(markup);
  listContainer.innerHTML = markup;
}
