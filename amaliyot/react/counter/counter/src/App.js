import { Component } from "react";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    }
  }

  inc = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  dec = () => {
    this.setState({
      counter: this.state.counter - 1
    })
  }

  res = () => {
    this.setState({
      counter: 0
    })
  }
  render() {
    return <div>
      <h1>{this.state.counter}</h1>
      <button onClick={this.inc}>inc</button>

      <button onClick={this.dec}>dec</button>

      <button onClick={this.res}>res</button>
    </div>
  }
}
export default App;
