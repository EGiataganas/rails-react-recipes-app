import React from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

const RecipeList = ({ recipes }) => (
  <div className="columns">
    {
      recipes.map(recipe =>
        <Recipe
          key={recipe.id}
          recipe={recipe}
        />
      )
    }
  </div>
)

RecipeList.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RecipeList;
