import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className='container'>
      <h1>Hello React!!</h1>
      <FuncComp initNumber={2} />
      <ClassComp initNumber={2} />
    </div>
  );
}

//함수타입 컴포넌트 생성
//함수형태에서 props를 사용할때는 this를 뺸다
function FuncComp(props) {
  let numberState = useState(props.initNumber);
  let number = numberState[0];
  let setNumber = numberState[1];

  let dateState = useState(new Date().toString());

  let _date = {
    date: dateState[0],
    setDate: dateState[1]
  }
  return (
    <div className="container">
      <h2>함수 타입 컴포넌트</h2>
      <p>Number: {number}</p>
      <p>Date: {_date.date}</p>
      <input type="button" value="Random" onClick={
        function () {
          setNumber(Math.random());
        }
      } />
      <input type="button" value="Date" onClick={
        function () {
          _date.setDate(new Date().toString());
        }
      } />
    </div>
  );
}
// props = 동적인 데이터 / state = 정적인 데이터


let classStyle = "color : red";
//constructor -> compontntWillMount -> render -> compontentDidMount


//클래스타입 컴포넌트 생성
class ClassComp extends Component {
  //객체 형태의 변수 생성
  state = {
    //props를 통해 넘어온 데이터를 number에 받음
    number: this.props.initNumber,
    date: (new Date().toString())
  }

  componentWillMount() {
    console.log("%cclass => componentWillmount", classStyle);
  }

  componentDidMount(){
    console.log("%cclass => componentDidMount", classStyle);
  }


  render() {
    console.log("%cclass => render", classStyle);
    return (
      <div className="container">
        <h2>클래스 타입 컴포넌트</h2>
        {/* 동적으로 변하는 데이터들을 state로 받아옴 */}
        <p>Number: {this.state.number}</p>
        <p>Date: {this.state.date}</p>
        <input type="button" value="Random" onClick={
          function () {
            this.setState({ number: Math.random() })
          }.bind(this)
        } />
        <input type="button" value="Date" onClick={
          function () {
            this.setState({ date: (new Date().toString()) })
          }.bind(this)
        } />
      </div>
    );
  }
}

export default App;

