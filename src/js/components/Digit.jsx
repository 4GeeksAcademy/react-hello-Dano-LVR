import React from "react";

export default class Digit extends React.Component {
  render() {
    return (
      <div className={`digit ${this.props.isIcon ? "icon" : ""}`}>
        {this.props.isIcon ? <i className="fa-regular fa-clock"></i> : this.props.value}
      </div>
    );
  }
}