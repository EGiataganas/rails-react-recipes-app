import React, { Component } from 'react';
import RecipeList from './components/recipes/RecipeList';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      recipes: {
        1: { id: 1, title: 'Recipe1', description: 'Recipe1 description', instruction: 'Some instruction.', updated_at: new Date(), image: null },
        2: { id: 2, title: 'Recipe2', description: 'Recipe2 description', instruction: 'Some instruction', updated_at: new Date(), image: null }
      }
    }
  }

  render() {
    const { recipes } = this.state;

    return (
      <section className="section">
        <div className="container">
          <RecipeList recipes={Object.values(recipes)} />
        </div>
      </section>
    );
  }
}
