import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
var chatRoom = [];
var chatList = [];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetBoxValue: "interact with me!",
      postQuestion: "",
      chatterWall: [],
      postAnwer: "",
      answerWall: [],
      needToAnswer: false,
      randomizer: 0
    };
  }

  deleteChat = event => {
    this.setState({
      chatterWall: [],
      answerWall: []
    });
  };

  updateGreetBox = event => {
    this.setState({ greetBoxValue: event.target.value, needToAnswer: false });
  };
  postQuestion = event => {
    this.setState(
      {
        postQuestion: this.state.greetBoxValue,
        chatterWall: this.state.chatterWall.concat(this.state.greetBoxValue),
        needToAnswer: true,
        roboAnswer: this.state.greetBoxValue.split(" "),
        greetBoxValue: "",
        needToAnswer: false,
        randomizer: 0
      },
      () => {
        console.log(
          "did it work",
          this.state.postQuestion,
          this.state.chatterWall
        );
      }
    );
    setTimeout(
      () =>
        this.setState({
          answerWall: this.state.answerWall.concat(
            this.state.chatterWall[this.state.chatterWall.length - 1]
          ),
          randomizer: Math.floor(Math.random() * 100)
        }),
      1200
    );
    setTimeout(this.setState({ answerWall: [] }), 1400);
  };
  sayHello = () => {
    let hiYa = () => {
      this.state.chatterWall; //.map(x => <li>{x}</li>);
    };
    setTimeout(hiYa, 1000);
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>DISCOVERYBOT</h1>
          <div>
            <h1>{this.state.chatterWall[this.state.chatterWall.length - 1]}</h1>
            <div />
          </div>
          <div>
            <ul>
              <ul>
                {this.state.randomizer < 30
                  ? this.state.answerWall.map(x => (
                      <h1>
                        {"how does " + x.split(" ").pop() + " make you feel?"}
                      </h1>
                    ))
                  : this.state.randomizer < 50
                    ? this.state.answerWall.map(x => (
                        <h1>
                          {"what do you think about " +
                            x.split(" ").pop() +
                            "?"}
                        </h1>
                      ))
                    : this.state.randomizer > 70
                      ? this.state.answerWall.map(x => (
                          <h1>
                            {"what do you mean by " + x.split(" ").pop() + "?"}
                          </h1>
                        ))
                      : this.state.answerWall.map(x => (
                          <h1>{"why " + x.split(" ").pop() + "?"}</h1>
                        ))}
              </ul>
            </ul>
          </div>
          <form
            onSubmit={e => {
              e.preventDefault();
              this.postQuestion();
            }}
          >
            <input
              className="greetBox"
              type="text"
              value={this.state.greetBoxValue}
              onChange={this.updateGreetBox}
            />
            <button type="submit">chat</button>
          </form>
          <div>
            <button onClick={this.deleteChat}> restart the chat</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
