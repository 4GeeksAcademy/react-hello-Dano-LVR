import React from "react";
import Card from "./Card.jsx";
import Digit from "./Digit.jsx";
import "../../styles/index.css";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 999995
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState(prevState => {
        if (prevState.count >= 999999) {
          return { count: 0 }; // reiniciaaaamoooossssss
        }
        return { count: prevState.count + 1 };
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const digits = String(this.state.count).padStart(6, "0").split("");

    return (
      <Card title="Si llego al tope exploto!">
        <div className="digit-strip">
          <Digit isIcon />
          {digits.map((d, i) => (
            <Digit key={i} value={d} />
          ))}
        </div>
      </Card>
    );
  }
}