import React from "react";
import styled from "styled-components";

function SearchBar({ searchValue, handleSearch }) {

  return (
    <Wrapper>
      <img src="./images/search.png" alt="Search Icon" />
      <Input
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
  display: flex;
  justify-content: flex-start;
  width: 60%;
  height: 40%;
  margin: 0;
`;

const Input = styled.input`
  display: flex;
  width: 80%;
  height: 100%;
  margin: 0;
`;

export default SearchBar;