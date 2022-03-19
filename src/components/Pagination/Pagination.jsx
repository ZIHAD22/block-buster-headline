import React, { Component } from "react";

class Pagination extends Component {
  state = {
    isEditable: false,
  };
  render() {
    const {
      currentPage,
      totalPage,
      next,
      prev,
      isPrevious,
      isNext,
      handlePageChange,
      goToPage,
    } = this.props;
    return (
      <div className="d-flex align-item-center my-5">
        <button
          className="btn btn-warning"
          disabled={!isPrevious}
          onClick={() => {
            prev();
          }}
        >
          Previous
        </button>
        <div className="flex-grow-1 text-center">
          {this.state.isEditable ? (
            <input
              type="number"
              value={currentPage}
              onChange={(e) => handlePageChange(e.target.value)}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  this.setState({ isEditable: false });
                  goToPage();
                }
              }}
            />
          ) : (
            <p
              style={{ userSelect: "none", lineHeight: "1.1" }}
              title="Double Click To Jump Page"
              onDoubleClick={() => {
                this.setState({ isEditable: !this.state.isEditable });
              }}
            >
              {currentPage} of {totalPage}
              <br />
              <small>Double Tap To Edit</small>
            </p>
          )}
        </div>
        <button
          disabled={!isNext}
          onClick={() => {
            next();
          }}
          className="btn btn-warning me-auto"
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
