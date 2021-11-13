import React from "react";

const Title = ({ title }) => {
  const words = title.length >= 50 ? `${title.slice(0, 50)}...` : {title};
  return <p className="item-title" title={title}>{words}</p>
};

export default Title;