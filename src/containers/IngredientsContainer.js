import React, { Component } from 'react'
import Ingredient from '../components/Ingredient';

const URL = "https://www.themealdb.com/api/json/v1/1/list.php?i=list"

class IngredientsContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            ingredients: [],
            ingredient: ""
        }
    }

    componentDidMount(){
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            this.setState({
                ingredients: data.meals,
                ingredient: ""
            })
        })
    }

    handleOnClick = (e) => {
        console.log(e.target.id)
        this.setState({
            ingredient: e.target.id
        })
    }

    render() {
        let ingredients = this.state.ingredients.map((ingredient, i) => {
            return <Ingredient key={i} ingredient={ingredient.strIngredient} handleClick={this.handleOnClick} />
        })
        return (
            <div>
               <h2>The Meal Ingredients:</h2>
               {console.log(this.state.ingredients)}
               {ingredients}
            </div>
        )
    }
}

export default IngredientsContainer
