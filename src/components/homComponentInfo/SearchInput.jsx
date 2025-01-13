import React from "react";

const SearchInput = ({ searchTerm, setSearchTerm }) => {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        placeholder="Search tweets..."
        onChange={handleInputChange}
        className="search-bar mx-3 my-2"
      />
    </div>
  );
};

export default SearchInput;
