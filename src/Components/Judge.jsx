import React from "react";

export default class Judge extends React.Component {
  constructor() {
    super();
    this.state = {
      stars: 0,
      available: false
    };
  }

  applaud = () => {
    //Send this applaud status to Kid.js
    this.props.getApplaud();
  };

  provideStars() {
    const { stars } = this.state;
    this.setState({ stars: stars + 1 });
      this.props.getStarsStatus(stars + 1);
  }
  render() {
    const { stars, available } = this.state;
    return (
      <div>
        <button
          className="btn btn-dark mt-3"
          type="button"
          onClick={this.applaud.bind(this)}
        >
          Appreciate performance
        </button>
        <br />
        <button
          className="btn btn-dark mt-3"
          type="button"
          onClick={this.provideStars.bind(this)}
        >
          Provide stars
        </button>
        <br />
        <h4>
          Kid is available:{" "}
          <span className="badge badge-primary">
            {!available ? "Yes" : "No"}
          </span>
        </h4>
        <h4>Stars gained: {stars}</h4>
      </div>
    );
  }

  shouldComponentUpdate() {
    const { stars } = this.state;
    return stars < 5 ? true : false;
  }
}
