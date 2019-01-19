import React from 'react';

const SearchBox = ({ value, onChangeSearchText }) => (
    <input type="text" onChange={onChangeSearchText} defaultValue={value}>
    </input>
);

export default SearchBox;