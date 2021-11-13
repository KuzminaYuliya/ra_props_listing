import React from "react";

const Quantity = ({ quantity }) => {
    const level = quantity <= 10 ? 'level-low' : quantity <= 20 ? 'level-medium' : 'level-high';
        return <p className={`item-quantity ${level}`}>{quantity} left</p>;
};

export default Quantity;