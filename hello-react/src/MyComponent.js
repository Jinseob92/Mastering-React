import { Component } from 'react';

class Mycomponent extends Component {
  render() {
    const favoriteNumber = 3;
    const { name, children } = this.props;
    return (
      <>
        안녕하세요, 제 이름은 {name} 입니다. <br />
        children 값은 {children}
        입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber} 입니다.
      </>
    );
  }
}
export default Mycomponent;
