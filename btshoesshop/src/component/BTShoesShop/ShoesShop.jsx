import React, { Component } from "react";

export default class ShoesShop extends Component {
  render() {
    const { product, handleShoesDefault, handleCart } = this.props;
    return (
      <div>
        <div className="card mb-3">
          <img
            onClick={() => handleShoesDefault(product)}
            src={product.image}
            alt=""
          />
          <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button
              onClick={() => handleCart(product)}
              className="btn btn-dark text-white"
            >
              Add to carts
              <i className="ml-3 fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
