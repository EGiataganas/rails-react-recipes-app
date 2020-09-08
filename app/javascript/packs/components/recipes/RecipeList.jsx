import React from 'react';
import PropTypes from 'prop-types';
import NonEditableRecipe from './NonEditableRecipe';

const RecipeList = ({ recipes }) => (
  <div className="columns">
    {
      recipes.map(recipe =>
        <NonEditableRecipe
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
