import React from "react";

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

export default Title;