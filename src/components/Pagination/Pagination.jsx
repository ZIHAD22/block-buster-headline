import React, { Component } from "react";

class Pagination extends Component {
  state = {
    isEditable: false,
  };
  render() {
    return (
      <div className="d-flex align-item-center my-5">
        <button className="btn btn-warning">Previous</button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input type="number" value="10" />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double Click To Jump Page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {1} of {100}
              <br />
              <small>Double Tap To Edit</small>
            </p>
          )}
        </div>
        <button className="btn btn-warning me-auto">Next</button>
      </div>
    );
  }
}

export default Pagination;
