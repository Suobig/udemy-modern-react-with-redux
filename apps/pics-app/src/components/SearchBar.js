import React from "react";

export default class SearchBar extends React.Component {
  state = { term: "" };
  
  onFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={(e) => this.onFormSubmit(e)}>
          <div className="field">
            <input
              type="text"
              placeholder={this.props.placeholder}
              value={this.state.term}
              onChange={(e) =>  this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}
