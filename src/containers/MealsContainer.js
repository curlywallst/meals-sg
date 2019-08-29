import React, { Component } from 'react'
import Meal from '../components/Meal'

class MealsContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            meals: [],
            searchTerm: ""
        }
    }


    componentDidMount() {
        this.fetchMeals()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.searchTerm !== this.props.searchTerm) {
            this.fetchMeals()
        }
      }

    fetchMeals = () => {
        let URL = `https://www.themealdb.com/api/json/v1/1/filter.php?${this.props.searchType}=${this.props.searchTerm}`
        fetch(URL)
        .then(res => res.json())
        .then(data => {
            console.log("fetching")
            if (data.meals){
                this.setState({
                    meals: data.meals,
                    searchTerm: this.props.searchTerm
                })
            }
        })
    }

    render() {
        if (this.props.searchTerm !== ""){
            let meals = this.state.meals.map((meal, i) => {
                return <Meal key={i} meal={meal.strMeal} />
            })

            return (
                <div>
                     <h3>{this.props.searchTerm.charAt(0).toUpperCase()+this.props.searchTerm.slice(1)} Meals:</h3>
                    {meals}
                </div>
            )
        } else {
            return(
                <h3>{this.props.banner}</h3>
            )
        }
    }
}

export default MealsContainer;
