import React from 'react';
import * as Elements from './Element.Search';
import Icons from '../../Assets/Icons/Icon';

const Search = () => {
  const [search, setSearch] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <>
      <Elements.MainWrapper>
        <Elements.SearchWrapper>
          <Elements.SearchIcon>
            <Elements.Icon alt="search" src={Icons.Search} />
            <Elements.Icon alt="search-down" src={Icons.SearchDown} />
          </Elements.SearchIcon>
          <Elements.Search
            onChange={handleChange}
            placeholder="Search"
            value={search}
          />
        </Elements.SearchWrapper>
      </Elements.MainWrapper>
    </>
  );
};

export default Search;
