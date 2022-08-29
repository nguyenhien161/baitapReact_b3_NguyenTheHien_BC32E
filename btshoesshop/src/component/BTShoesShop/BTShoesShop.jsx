import React, { Component } from "react";
import Backet from "./Backet";
import data from "./data.json";
import Detail from "./Detail";
import ShoesShop from "./ShoesShop";
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
    cart: [
      {
        id: 2,
        name: "Adidas Prophere Black White",
        alias: "adidas-prophere-black-white",
        price: 450,
        description:
          "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
        shortDescription:
          "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
        quantity: 990,
        image: "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png",
        soLuong: 1,
      },
    ],
  };
  handleShoesDefault = (shoes) => {
    this.setState({
      shoesShop: shoes,
    });
  };
  handleCart = (shoesClick) => {
    const value = { ...shoesClick, soLuong: 1 };
    const data = [...this.state.cart];

    const index = data.findIndex((shoes) => shoes.id === shoesClick.id);

    if (index !== -1) {
      data[index].soLuong += 1;
    } else {
      data.push(value);
    }

    this.setState({
      cart: data,
    });
  };
  render() {
    return (
      <div className="container">
        <h2 className="text-center">ShoesShop</h2>
        <Backet cart={this.state.cart} />
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
                    <ShoesShop
                      product={shoes}
                      handleShoesDefault={this.handleShoesDefault}
                      handleCart={this.handleCart}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <hr />
        <Detail shoes={this.state.shoesShop} />
      </div>
    );
  }
}
