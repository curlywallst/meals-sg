import React from 'react'

const Category = ({category, handleClick}) =>  (<button id={category} onClick={handleClick} >{category}</button>)

export default Category;