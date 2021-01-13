import * as React from "react";

class Products extends React.Component {
  render() {
    return (
      <main>
        <h1>Products Page</h1>
        <ul>
          {this.props.items.map((item, i) => {
            return <li key={i}>{item}</li>;
          })}
        </ul>
      </main>
    );
  }
}

export default Products;
