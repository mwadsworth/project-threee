import React from "react";
import "./style.css";

function ItemCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.itemName} src={props.itemImage} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Owner Name:</strong> {props.ownerName}
          </li>
          <li>
            <strong>Item Name:</strong> {props.itemName}
          </li>
          <li>
            <strong>Category:</strong> {props.category}
          </li>
          <li>
            <strong>Price:</strong> {props.price}
          </li>
        </ul>
      </div>
      <span onClick={() => props.addItem(props.id)} className="add">
        A
      </span>
    </div>
  );
}

export default ItemCard;
