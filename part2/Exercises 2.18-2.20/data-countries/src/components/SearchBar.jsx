import React from "react";

const SearchBar = ({ value, onChange }) => {
  return (
    <div>
      Find countries: <input value={value} onChange={onChange} />
    </div>
  );
};

export default SearchBar;
