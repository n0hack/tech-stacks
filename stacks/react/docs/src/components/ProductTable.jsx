import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ datas }) => {
  console.log(datas);
  return (
    <div>
      <ProductCategoryRow category="Sporting Goods" />
      <ul>
        {datas.map((data) => (
          <ProductRow key={data.name} data={data} />
        ))}
      </ul>
      <ProductCategoryRow category="Electronics" />
      <ul>
        {datas.map((data) => (
          <ProductRow key={data.name} data={data} />
        ))}
      </ul>
    </div>
  );
};

export default ProductTable;
