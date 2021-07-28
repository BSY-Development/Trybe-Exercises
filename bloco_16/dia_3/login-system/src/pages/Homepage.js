import React from 'react';
import { Link } from 'react-router-dom';

export default class Homepage extends React.Component {
  render() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='/cadastro' >Cadastro</Link>
        <Link to='/login' >Login</Link>
      </div>
    );
  }
}
