import React, { Component } from "react";

export default class Backet extends Component {
  render() {
    const { cart } = this.props;
    const renderCart = () => {
      return cart.map((items) => {
        return (
          <tr key={items.id}>
            <td>{items.id}</td>
            <td>{items.name}</td>
            <td>
              <img width={50} src={items.image} alt="" />
            </td>
            <td>{items.price}</td>
            <td>
              <button className="btn btn-success">-</button>
              <span className="mx-2">{items.soLuong}</span>
              <button className="btn btn-danger">+</button>
            </td>
            <td>{(items.price * items.soLuong).toLocaleString()}</td>
            <td>
              <button className="btn btn-warning">Xóa</button>
            </td>
          </tr>
        );
      });
    };
    return (
      <div>
        <div className="text-right my-4">
          <button
            type="button"
            className="btn btn-dark"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            <i className="fa-solid fa-cart-shopping mr-2"></i>
            Giỏ hàng
          </button>
        </div>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Giỏ hàng Shoes
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Tên SP</th>
                      <th>Hình ảnh</th>
                      <th>Giá bán</th>
                      <th>Số lượng</th>
                      <th>Tổng tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{renderCart()}</tbody>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
