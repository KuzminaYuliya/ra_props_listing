import React from "react";
import items from "./esty.json";

const Title = ({ title }) => {
  if (title.length >= 50) {
    return (
      <p className="item-title" title={title}>{`${title.slice(0, 50)}...`}</p>
    );
  } else {
    return (
      <p className="item-title" title={title}>
        {title}
      </p>
    );
  }
};

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

const Quantity = ({ quantity }) => {
    if (quantity <= 10) {
        return <p className="item-quantity level-low">{quantity} left</p>;
    } else if (quantity <= 20 && quantity > 10) {
        return <p className="item-quantity level-medium">{quantity} left</p>;
    } else {
        return <p className="item-quantity level-high">{quantity} left</p>;
    }
};

const Listing = () => {
  const template = items.map((item, index) =>
    item.state === "active" ? (
      <div className="item-list" key={item.listing_id}>
        <div className="item">
          <div className="item-image">
            <a href={item.url}>
              <img
                src={item.MainImage.url_570xN}
                alt={item.MainImage.listing_image_id}
              />
            </a>
          </div>
          <div className="item-details">
            <Title title={item.title} />
            <Price price={item.price} code={item.currency_code} />
            <Quantity quantity={item.quantity} />
          </div>
        </div>
      </div>
    ) : null
  );

  return template;
};
export default Listing;
