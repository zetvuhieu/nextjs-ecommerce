"use client";
import React, { useState } from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const onSearch = (value: string) => {
    setSearchTerm(value);
    console.log("Searching for:", value);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <Search
        placeholder="Tìm kiếm người dùng"
        onSearch={onSearch}
        enterButton
        className="w-full"
      />
      <p className="mt-2 text-gray-500">Kết quả tìm kiếm: {searchTerm}</p>
    </div>
  );
};

export default SearchComponent;
