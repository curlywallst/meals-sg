import React, { Component } from 'react'
import Category from '../components/Category'
import MealsContainer from './MealsContainer';

const URL = "https://www.themealdb.com/api/json/v1/1/list.php?c=list"

class CategoriesContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: [],
            category: ""
        }
    }

    componentDidMount() {
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                categories: data.meals,
                category: ""
            })
        })
    }

    handleOnClick = (e) => {
        console.log(e.target.id)
        this.setState({
            category: e.target.id
        })
    }

    render() {
        let categories = this.state.categories.map((category, i) => {
            return <Category key={i} category={category.strCategory} handleClick={this.handleOnClick} />
        })

        return (
            <div>
                <h2>The Meal Categories</h2>
                {categories}
                <h2>The Meals in the Category</h2>
                <MealsContainer searchTerm={this.state.category} searchType="c" banner="Select a Category" />
            </div>
        )
    }
}


export default CategoriesContainer;
