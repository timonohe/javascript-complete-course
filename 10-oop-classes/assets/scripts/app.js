class Product {
  title = 'DEFAULT';
  imageUrl;
  description;
  price;
}

console.log(new Product());

const productList = {
  products: [
    // new Product(),
    {
      title: 'A Pillow',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0951/7126/products/classic_solid-white_pillowcase_silo_768x.progressive.jpg?v=1628533735',
      price: 19.99,
      description: 'A soft pillow!',
    },
    {
      title: 'A Carpet',
      imageUrl: 'https://image.made-in-china.com/2f0j00sqzGDuBcJRbr/Floor-Carpet-Soft-4cm-Rugs-Velvet-Carpets-for-Living-Room.jpg',
      price: 89.99,
      description: 'A carpet which you might like - or not.'
    }
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    this.products.forEach(product => {
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${product.imageUrl}" alt="${product.title}">
          <div class="product-item__content">
            <h2>${product.title}</h2>
            <h3>\$${product.price}</h3>
            <p>${product.description}</p>
            <button>Add to Card</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    });
    renderHook.append(prodList);
  }
};

productList.render();