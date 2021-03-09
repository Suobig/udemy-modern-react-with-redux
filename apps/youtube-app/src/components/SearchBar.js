import React from 'react';

class SearchBar extends React.Component {
  state = { term: 'Test' };

  onInputChange = ({ target }) => {
    this.setState({ term: target.value });
  }

  onFormSubmit = ( event ) => {
    event.preventDefault();
    //TODO: make sure we call callback from parent component;
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <div onSubmit={ this.onFormSubmit } className="ui form">
          <div className="ui field">
            <input 
              type="text"
              placeholder="Search youtube videos..."
              value = { this.state.term }
              onChange = { this.onInputChange }
            />
          </div>
        </div>
      </div>
    )
  }
}

export default SearchBar;  