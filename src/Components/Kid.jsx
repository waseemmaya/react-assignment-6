import React from "react";
export default class Kid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion: "nervous",
      danceSteps: [],
      currentStepIndex: 0,
      startedPerforming: false
    };
  }

  qualified = () => {
    this.props.result();
  };

  render() {
    console.log("performing", this.state.startedPerforming);

    const { dressColor } = this.props;
    const {
      danceSteps,
      emotion,
      startedPerforming,
      currentStepIndex
    } = this.state;

    // console.log("Danc Steps***", this.state.danceSteps);
    return (
      <div>
        <div>dressColor: {dressColor}</div>
        <div
          style={{
            backgroundColor: dressColor,
            width: 50,
            height: 50
          }}
        />
        <div>Emotion: {!this.props.applaud ? emotion : "Happy"}</div>
        {startedPerforming && (
          <div>
            <div>Current Step: {danceSteps[currentStepIndex]}</div>
            <button
              className="btn btn-dark mt-3"
              onClick={() =>
                this.setState({
                  currentStepIndex: currentStepIndex + 1
                })
              }
            >
              Perform Next Step
            </button>
          </div>
        )}
      </div>
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stars === 4) {
      console.log("reached");

      this.qualified();
    }
  }

  static getDerivedStateFromProps(props, state) {
    return {
      danceSteps:
        state.danceSteps.length === 5
          ? state.danceSteps
          : [...state.danceSteps, ...props.furtherSteps],
      applaud: props.applaud,
      startedPerforming: props.startedPerforming,
      stars: props.stars
    };
  }

  componentDidMount() {
    this.setState({
      danceSteps: ["Step 1", "Step 2"]
    });
  }
}
Kid.defaultProps = { dressColor: "red", applaud: false, furtherSteps: [] };
