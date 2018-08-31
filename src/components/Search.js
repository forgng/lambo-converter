import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const BaseInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #eee;
  border-radius: 0;
  outline: none;
  height: 3rem;
  width: 100%;
  font-size: 1rem;
  margin: 0 0 20px 0;
  padding: 0;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.3s;
  letter-spacing: 1px;
  padding: 10px 10px 10px 50px;
  position: relative;
  transition: 0.3s;
`;
const SearchIcon = () => (
  <SearchIcn
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </SearchIcn>
);

const SearchIcn = styled.svg`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: 0.3s;
`;
const SearchBar = ({ searchString, handleChangeSearch }) => (
  <SearchBoxContainer>
    <SearchBarWrapper>
      <SearchInput
        type="text"
        text={searchString}
        placeholder="Search coin"
        onChange={e => handleChangeSearch(e.target.value)}
      />
      <SearchIcon />
    </SearchBarWrapper>
  </SearchBoxContainer>
);

SearchBar.propTypes = {
  searchString: PropTypes.string,
  handleChangeSearch: PropTypes.func,
};

const SearchBoxContainer = styled.div`
  position: relative;
`;
const SearchBarWrapper = styled.div`
  transition: 0.3s;
  background-color: #fff; // border-radius: 2px;
  input[type='text'] {
    border-bottom: 1px solid #eee;
  }
`;

const SearchInput = styled(BaseInput)`
  transition: all 0.3s;
  font-weight: 400;
  color: ${props => props.theme.baseTextColor};
  margin-bottom: 15px;
  height: 2.5rem;
  &:focus {
    transition: 0.3s;
    box-shadow: 0 1px 0 0 ${props => props.theme.mainColor};
    border-bottom: 1px solid ${props => props.theme.mainColor};
  }
`;
export default SearchBar;
