import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className="counter-card card">
        <div className="card-body">
          {this.props.title && <h5 className="card-title">{this.props.title}</h5>}
          {this.props.children}
        </div>
      </div>
    );
  }
}