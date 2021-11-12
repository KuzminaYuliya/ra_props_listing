import React from "react";

const Price = ({ price, code }) => {
    if (code === "USD") {
      return <p className="item-price">${price}</p>;
    } else if (code === "EUR") {
      return <p className="item-price">€{price}</p>;
    } else {
      return (
        <p className="item-price">
          {price} {code}
        </p>
      );
    }
  };

export default Price; 