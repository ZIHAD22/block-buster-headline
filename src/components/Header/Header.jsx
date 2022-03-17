import React, { Component } from "react";
import { newsCatagories } from "../../news";

class Header extends Component {
  state = {
    searchTram: "",
  };
  handleChange = (e) => {
    this.setState({ searchTram: e.target.value });
  };
  handleOnKeyPress = () => {
    //   TODO: Later
  };
  render() {
    const { category } = this.props;
    return (
      <div className="my-4">
        <h1 className="mb-4" style={{ fontWeight: "300" }}>
          Block Buster HeadLines
        </h1>
        <input
          type="search"
          className="form-control"
          placeholder="Type anything & Press Enter To Search"
          value={this.state.searchTram}
          onChange={this.handleChange}
          onKeyUp={this.handleOnKeyPress}
        />
        <div className="my-4">
          {Object.keys(newsCatagories).map((item) => {
            if (category === newsCatagories[item]) {
              return (
                <button
                  key={newsCatagories[item]}
                  className="btn btn-sm btn-warning ms-2 mb-2"
                >{`#${newsCatagories[item]}`}</button>
              );
            }
            return (
              <button
                key={newsCatagories[item]}
                className="btn btn-sm btn-light ms-2 mb-2"
              >
                {`#${newsCatagories[item]}`}{" "}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Header;
