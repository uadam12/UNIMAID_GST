import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.quiz = props.quiz;
    this.state = {timeleft: this.quiz.timeAllowed};
  }

  componentDidMount() {
    const play = window.setInterval(() => {
      const timeleft = this.state.timeleft;
      
      if(timeleft > 1) this.setState({
        timeleft: timeleft-1
      });
      else {
        window.clearInterval(play);
        this.quiz.submit();
      }
    }, 1000);
  }

  render() {
    return (<div className="progress" style={{height:"5px"}}>
      <div className="progress-bar" style={{
      width: (this.state.timeleft / this.quiz.timeAllowed * 100 )+"%",
      height: "5px"
    }}></div>
    </div>);
  }
}