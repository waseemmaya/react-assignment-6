import React, { Component } from "react";
import Kid from "./Components/Kid";
import Teacher from "./Components/Teacher";
import Judge from "./Components/Judge";

class App extends Component {
  constructor() {
    super();
    this.state = {
      volume: 0,
      furtherSteps: [],
      applaud: false,
      stars: 0,
      qualifid: false,
      startedPerforming: false,
      isJudge: true,
      isTeacher: true,
      isKid: true,
      msg : false
    };
  }

  render() {
    const {
      furtherSteps,
      applaud,
      stars,
      isJudge,
      isTeacher,
      msg,
      isKid
    } = this.state;
    return (
      <div className="container">
        <h4 className="display-4">React Life Cycle Hooks</h4>

        {isKid && <Kid
          stars={stars}
          result={this.result}
          qualifid={this.state.qualifid}
          startedPerforming={this.state.startedPerforming}
          dressColor="Purple"
          applaud={applaud}
          furtherSteps={furtherSteps}
        />}

        {isTeacher && <Teacher getFurtherSteps={this.getFurtherSteps} />}

        {isJudge && (
          <Judge
            getStarsStatus={this.getStarsStatus}
            getApplaud={this.getApplaud}
          />
        )}
        {msg && <h1>Destroyed Everything.... <br/>Kesa Diya..?</h1>}
      </div>
    );
  }

  getStarsStatus = stars => {
    this.setState({
      qualifid: true,
      stars
    });
  };

  static getDerivedStateFromProps() {
    return {
      volume: 5
    };
  }

  getApplaud = () => {
    this.setState({
      applaud: true
    });
  };

  getFurtherSteps = furtherSteps => {
    this.setState({
      furtherSteps,
      startedPerforming: true
    });
  };

  result = () => {
    this.setState({
      startedPerforming: false,
      isJudge: false,
      isKid: false,
      isTeacher: false,
      msg : true
    });
  };
}

export default App;
