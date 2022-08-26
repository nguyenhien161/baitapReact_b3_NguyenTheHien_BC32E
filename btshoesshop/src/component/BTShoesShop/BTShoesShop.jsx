import React, { Component } from "react";
import data from "./data.json";
export default class BTShoesShop extends Component {
  state = {
    shoesShop: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description:
        "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription:
        "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      image: "http://svcy3.myclass.vn/images/adidas-prophere.png",
    },
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">ShoesShop</h2>
        <div className="row">
          <div className="col-2">
            <h1>Sidebar</h1>
            <p>Nike</p>
            <p>Puma</p>
            <p>Adidas</p>
            <p>Li-ning</p>
          </div>
          <div className="col-10 d-sm-flex flex-wrap">
            <div className="row">
              {data.map((shoes) => {
                return (
                  <div className="col-4" key={shoes.id}>
                    <div className="card mb-3">
                      <img
                        onClick={() => this.setState({ shoesShop: shoes })}
                        src={shoes.image}
                        alt=""
                      />
                      <div className="card-body">
                        <p>{shoes.name}</p>
                        <p>{shoes.price}</p>
                        <button className="btn btn-dark text-white">
                          Add to carts
                          <i className="ml-3 fa-solid fa-cart-shopping"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <div className="row mt-5">
          <div className="col-6">
            <img src={this.state.shoesShop.image} alt="" />
          </div>
          <div className="col-4">
            <p>Name: {this.state.shoesShop.name}</p>
            <p>Price: {this.state.shoesShop.price}</p>
            <p>Description: {this.state.shoesShop.description}</p>
            <p>Quantity: {this.state.shoesShop.quantity}</p>
            <button className="btn btn-primary">Buy</button>
          </div>
        </div>
      </div>
    );
  }
}
