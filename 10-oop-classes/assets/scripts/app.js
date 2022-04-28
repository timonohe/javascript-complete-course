class Product {
  // if constructor is setup the object then this class fields are unnecessary to declare
  // because the constructor overrides them
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
}

class ProductList {
  products = [
    new Product(
      'A Pillow',
      'https://cdn.shopify.com/s/files/1/0951/7126/products/classic_solid-white_pillowcase_silo_768x.progressive.jpg?v=1628533735',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://image.made-in-china.com/2f0j00sqzGDuBcJRbr/Floor-Carpet-Soft-4cm-Rugs-Velvet-Carpets-for-Living-Room.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ];

  constructor() {}

  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    this.products.forEach(product => {
      const productItem = new ProductItem(product);
      const productElement = productItem.render();
      prodList.append(productElement);
    });
    renderHook.append(prodList);
  }
}

class ProductItem {
  constructor(product) {
    this.product = product;
  }

  addToCart() {
    console.log('Adding product to cart...');
    console.log(this.product);
  }

  render() {
    const prodEl = document.createElement('li');
    prodEl.className = 'product-item';
    prodEl.innerHTML = `
      <div>
        <img src="${this.product.imageUrl}" alt="${this.product.title}">
        <div class="product-item__content">
          <h2>${this.product.title}</h2>
          <h3>\$${this.product.price}</h3>
          <p>${this.product.description}</p>
          <button>Add to Cart</button>
        </div>
      </div>
    `;
    const addToCartButton = prodEl.querySelector('button');
    addToCartButton.addEventListener('click', this.addToCart.bind(this));
    return prodEl;
  }
}

const productList = new ProductList();
productList.render();
