import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EditableRecipe from './EditableRecipe';
import NonEditableRecipe from './NonEditableRecipe';
import '../../styles/recipe';

class RecipeToggle extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { isEditable: false };
  }

  toogle = () => {
    this.setState(currentState => {
      return { isEditable: !currentState.isEditable }
    });
  }

  render() {
    return this.props.children({
      isEditable: this.state.isEditable,
      toogle: this.toogle
    })
  }
}

const Recipe = ({ recipe }) => (
  <RecipeToggle>
    {
      ({isEditable, toogle}) => (
        <div className="column is-one-third">
          <div className="card">
            {isEditable
              ?
              <EditableRecipe
                recipe={recipe}
                toogle={toogle} />
              :
              <NonEditableRecipe recipe={recipe} />
            }
            <div className="has-text-right buttons-padding">
              <a
                className="button is-primary"
                onClick={toogle}>
                  {isEditable ? 'Close' : 'Edit'}
              </a>
            </div>
          </div>
        </div>
      )
    }
  </RecipeToggle>
)

Recipe.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.integer,
    description: PropTypes.string,
    image: PropTypes.object,
    title: PropTypes.string,
    instruction: PropTypes.string,
    updated_at: PropTypes.string
  }).isRequired
};

export default Recipe;
