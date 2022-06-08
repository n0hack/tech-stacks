import React, { useState } from 'react';

const SearchBar = ({ onFilter }) => {
  const [form, setForm] = useState({
    searchInput: '',
    inStock: false,
  });

  const onChange = (e) => {
    setForm((form) => {
      const nextForm = {
        ...form,
        [e.target.name]:
          e.target.name === 'inStock' ? e.target.checked : e.target.value,
      };
      onFilter({ input: nextForm.searchInput, inStock: nextForm.inStock });
      return nextForm;
    });
  };

  return (
    <form>
      <input name="searchInput" value={form.searchInput} onChange={onChange} />
      <br />
      <input
        name="inStock"
        type="checkbox"
        onChange={onChange}
        value={form.inStock}
      />{' '}
      Only show products in stock
    </form>
  );
};

export default SearchBar;
