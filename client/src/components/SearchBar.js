import React from "react";
import styled from "styled-components";

function SearchBar({ searchValue, handleSearch }) {

  return (
    <Wrapper>
      <img src="./images/search.png" alt="Search Icon" />
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={searchValue}
        onChange={handleSearch}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: orange;
  display: flex;
  width: 100%;
  height: 5%;
  margin: 0;
`;

export default SearchBar;