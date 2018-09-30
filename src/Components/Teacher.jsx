import React from "react";
export default class Teacher extends React.Component {
  sendDataToKid = () => {
    const furtherSteps = ["Step 3", "Step 4", "Step 5"];
    this.props.getFurtherSteps(furtherSteps);
  };
  render() {
    return (
      <div>
        <button className="btn btn-dark mt-3" onClick={this.sendDataToKid}>
          Get Help From Teacher
        </button>
      </div>
    );
  }
}
