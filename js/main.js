'use strict';

class ProductItem {
    constructor(product, img='https://via.placeholder.com/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = img;
    }

    getHTMLString() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
    }
}

class ProductList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this.allProducts = [];

        this.fetchGoods();
        this.render();
        this.priceAllGoods();

    }

    fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 20000},
            {id: 2, title: 'Mouse', price: 1500},
            {id: 3, title: 'Keyboard', price: 5000},
            {id: 4, title: 'Gamepad', price: 4500},
        ];
    }

    render() {
        const block = document.querySelector(this.container);

        for (const product of this.goods) {
            const productObject = new ProductItem(product);
            this.allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    // Подсчет суммы всех товаров

    priceAllGoods() {
        let totalPrice = this.goods.reduce(function(sum, good) {
            return sum + good.price;
        }, 0);
        console.log(totalPrice);
    }
}

class ProductInBasket extends ProductItem {
    constructor(product, size, amount, color, img='https://via.placeholder.com/200x150') {
        super(product);
        this.size = size;
        this.amount = amount;
        this.color = color;
    }

    render() {

    };
}

const list = new ProductList();