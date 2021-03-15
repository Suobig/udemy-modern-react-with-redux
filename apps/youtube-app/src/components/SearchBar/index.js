import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  }

  onFormSubmit = ( event ) => {
    event.preventDefault();
    this.props.onFormSubmit( this.state.term );
  }

  render() {
    return (
      <nav className="search-bar ui segment">
        <form onSubmit={ this.onFormSubmit } className="ui form">
          <div className="ui field">
            <input 
              type="text"
              placeholder="Search youtube videos..."
              value = { this.state.term }
              onChange = { this.onInputChange }
            />
          </div>
        </form>
      </nav>
    )
  }
}

export default SearchBar;  