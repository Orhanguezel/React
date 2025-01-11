import React from "react";
import { Table } from "reactstrap";

export default function ProductList(props) {
  return (
    <div>
      <h3>
        {props.info.title} - {props.currentCategory}
      </h3>

      {/* Products table */}
      <Table className="table table-striped">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price ($)</th>
            <th>Units In Stock</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.productName}</td>
              <td>{product.quantityPerUnit}</td>
              <td>{product.unitPrice}</td>
              <td>{product.unitsInStock}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
