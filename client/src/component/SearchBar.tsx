import React from 'react';
import { ISearchBarProps } from '../model/global';

const SearchBar: React.FC<ISearchBarProps> = React.memo(({ searchQuery, setSearchQuery }) => (
  <input
    type="text"
    placeholder="Search employees"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
));

export default SearchBar;
