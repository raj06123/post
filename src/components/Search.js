import React from 'react';

const Search = ({handleChangeTextToSearch}) => {

    const handleChange = (e) => {
        handleChangeTextToSearch(e.target.value);
    }

    return (
        <div>
            <input onChange = {handleChange} type="text"/>
        </div>
    )
}

export default Search;