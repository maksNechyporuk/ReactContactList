import React, { Component, Fragment } from "react";

import "./search-panel.css";

export default class SearchPanel extends Component {
  state = {
    text: ""
  };
  textChange = value => {
    this.setState({ text: value });
  };
  onSubmit = event => {
    event.preventDefault();
    console.log(this.state.name);
    this.props.onSearch(this.state.text);
    this.setState({
      text: ""
    });
  };
  render() {
    const { onSearch } = this.props;
    return (
      <form onSubmit={this.onSubmit}>
        <div class="row form-group">
          <div class="col-md-7">
            <input
              class="form-control"
              placeholder="Enter text for full text search"
              onChange={e => {
                onSearch(e.target.value);
                this.textChange(e.target.value);
              }}
            />
          </div>
          <div class="col-md-5">
            <button type="submit" class="btn btn-success">
              Search
            </button>
            <button
              type="reset"
              onClick={e => {
                onSearch("");
              }}
              class="btn btn-secondary text-reset"
            >
              Clear
            </button>
          </div>
        </div>
      </form>
    );
  }
}
