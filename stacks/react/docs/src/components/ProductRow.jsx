import React from 'react';

const ProductRow = ({ data }) => {
  const { name, price } = data;
  return (
    <li>
      {name} ({price})
    </li>
  );
};

export default ProductRow;
