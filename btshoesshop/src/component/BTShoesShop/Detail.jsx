import React, { Component } from "react";

export default class Detail extends Component {
  render() {
    const { shoes } = this.props;
    return (
      <div>
        <div>
          <div className="row mt-5">
            <div className="col-6">
              <img src={shoes.image} alt="" />
            </div>
            <div className="col-4">
              <p>Name: {shoes.name}</p>
              <p>Price: {shoes.price}</p>
              <p>Description: {shoes.description}</p>
              <p>Quantity: {shoes.quantity}</p>
              <button className="btn btn-primary">Buy</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
