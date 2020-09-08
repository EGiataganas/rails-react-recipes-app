import React, { PureComponent } from 'react';
import '../../styles/recipe';

class EditableRecipe extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      editableRecipe: this.props.recipe,
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange = ({ target }) => {
    const { value, name } = target;
    const { editableRecipe } = this.state;

    this.setState({
      editableRecipe: {...editableRecipe, [name]: value}
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    const { editableRecipe } = this.state;
    const formRecipeData = new FormData(event.target);

    this.props.submit(formRecipeData, editableRecipe);
  }

  render() {
    const { editableRecipe } = this.state;

    return (
      <div className="card-content">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title" className="label">Title</label>
          <div className="control">
            <input
              id="title"
              name="title"
              className="input"
              type="text"
              value={editableRecipe.title}
              onChange={this.handleInputChange} />
          </div>
          <label htmlFor="description" className="label">Description</label>
          <div className="control">
            <textarea
              id="description"
              name="description"
              className="textarea"
              value={editableRecipe.description}
              onChange={this.handleInputChange} />
          </div>
          <label htmlFor="instruction" className="label">Instruction</label>
          <div className="control">
            <textarea
              id="instruction"
              name="instruction"
              className="textarea"
              value={editableRecipe.instruction}
              onChange={this.handleInputChange} />
          </div>
          <div className="control has-text-left editable-buttons">
            <input type="submit" value="Submit" className="button is-danger" />
          </div>
        </form>
      </div>
    );
  }
}

export default EditableRecipe;
