import React from 'react'

function Header({onChangeOfCriteria}) {

    const handleSortingCriteria = (e) => {
        onChangeOfCriteria(e.target.value);
    }

    return (
        <div>
           Sort By <select onChange={handleSortingCriteria}>
           <option value="date">Date</option>
           <option value="view">View</option>
           <option value="like">Like</option>
               
           </select>
        </div>
    )
}

export default Header
