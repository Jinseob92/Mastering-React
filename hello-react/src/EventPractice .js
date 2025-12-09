import { Component } from 'react';

class EventPractice extends Component {
  state = {
    message: '',
    username: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };
  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="사용자명"
          value={this.state.username}
          onChange={this.handleChange}
        />

        <input
          type="text"
          name="message"
          placeholder="아무거나 입력해 보세요."
          value={this.state.message}
          onChange={this.handleChange}
          onKeyDown={(e) => this.handleKeyPress(e)}
        />
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({
              message: '',
            });
          }}
        >
          확인
        </button>
      </>
    );
  }
}
export default EventPractice;
