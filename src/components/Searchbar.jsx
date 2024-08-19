import React, { useState } from "react";

const SearchBar = ({ data, placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:border-purple-600"
        placeholder={placeholder || "Search..."}
      />
    </div>
  );
};

export default SearchBar;
