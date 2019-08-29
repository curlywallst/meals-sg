import React, { Component } from 'react'
import MealsContainer from './MealsContainer';

class IngredientsList extends Component {
    render() {
        return (
            <div>
                <h2>The Meals with {this.props.match.params.id.split("_").join(" ")} </h2>
                <MealsContainer searchTerm={this.props.match.params.id.split("_").join(" ")} searchType="i" />
                {console.log(this.props.match.params.id)}
            </div>
        )
    }
}

export default IngredientsList;
