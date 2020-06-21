import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import { storeProducts } from "../data";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//import styled from "styled-components";

export default class ProductList extends Component {
  state = {
    products: storeProducts,
  };

  render() {
    console.log(this.state.products);

    return (
      <React.Fragment>
        <div className="py-3">
          <div className="container">
            <Title name="Our" title=" Product" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Product key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
