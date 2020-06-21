import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart,
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>{title}</h1>
                </div>
              </div>

              <div className="row">
                <div className="col-5 mx-auto col-md-auto my-3">
                  <img src={img} className="card-img-top" alt="product" />
                </div>
              </div>
              <div className="col-10 mx-auto col-md-6 my-3">
                <h2>Model: {title}</h2>
                <h4 className="text-green text-uppercase text-muted mt-1 mb-2">
                  Made by : <span className="text-uppercase">{company}</span>
                </h4>
                <h4 className="text-blue">
                  <strong>
                    price : <span>PHP</span>
                    {price}
                  </strong>
                </h4>
                <p className="text-capitalized font-weight-bold mt-3 mb-10">
                  Some info about the cake:
                </p>
                <p className="text-muted lead mt-3 mb-0">{info}</p>
                <div>
                  <Link to="/ProductList">
                    <ButtonContainer>back to Productlist</ButtonContainer>
                  </Link>
                  <ButtonContainer
                    cart
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                      value.openModal(id);
                    }}
                  >
                    {inCart ? "inCart" : "add to cart"}
                  </ButtonContainer>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
