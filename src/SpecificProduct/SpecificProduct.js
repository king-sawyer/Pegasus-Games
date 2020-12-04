import React from "react";

class SpecificProduct extends React.Component {
  render() {
    console.log(this.props);

    return <div className="product">Here is a product!</div>;
  }
}

export default SpecificProduct;
