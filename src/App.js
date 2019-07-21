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
      <div className="container">
        <h1>Ecommerce shopping cart application</h1>
        <br />
        <div className="row">
          <div className="col-md-8">
            <Products products={this.state.filteredProducts} />
          </div>
        </div>
      </div>
    );
  }
}
