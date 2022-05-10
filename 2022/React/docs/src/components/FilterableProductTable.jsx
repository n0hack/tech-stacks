import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

// prettier-ignore
const response = [
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
]

const FilterableProductTable = () => {
  const [datas, setDatas] = useState(response);

  const onFilter = ({ input, inStock }) => {
    console.log(inStock);
    let filtered = datas.filter((data) => data.name.includes(input));
    if (inStock) {
      filtered = filtered.filter((data) => data.stocked);
    }
    setDatas(filtered);
  };

  return (
    <>
      <SearchBar onFilter={onFilter} />
      <ProductTable datas={datas} />
    </>
  );
};

export default FilterableProductTable;
