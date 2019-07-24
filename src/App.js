import React, { Component } from "react";
import Products from "./components/Product";
import "./App.css";

export default class App extends Component {
  state = {
    products: [],
    filteredProducts: []
  };

  componentWillMount() {
    fetch("http://localhost:8000/products/")
      .then(res => res.json())
      .then(data => this.setState({ products: data, filteredProducts: data }));
  }
  render() {
    return (
      <div>
        <div className=" navbar bg-primary text-center pb-2">
          <h1 style={{ color: "white" }}>
            Ecommerce shopping cart application
          </h1>
        </div>
        <div className="container">
          <br />
          <div className="row">
            <div className="col-md-8">
              <Products products={this.state.filteredProducts} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
