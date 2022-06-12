import React from "react";
import styled, { css } from "styled-components";

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

const commonStyles = css`
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

const Wrapper = styled.div`
  ${commonStyles}
  width: 60%;
  height: 40%;
`;

const Input = styled.input`
  ${commonStyles}
  width: 80%;
  height: 100%;
`;

export default SearchBar;