// import logo from './logo.svg';
import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const Techs = ['HTML', 'CSS', 'Javascript', 'React'];

class App extends React.Component {
  render() {
    const toUnderstand = Techs.map((item) => Task(item));
    return (
      <ul>{ toUnderstand }</ul>
    );
  }
}

export default App;
