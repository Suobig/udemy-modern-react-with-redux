import React from "react";

export default class SearchBar extends React.Component {
  onInputChanged(e) {
    // console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder={this.props.placeholder}
              onChange={this.onInputChanged}
            />
          </div>
        </form>
      </div>
    );
  }
}
