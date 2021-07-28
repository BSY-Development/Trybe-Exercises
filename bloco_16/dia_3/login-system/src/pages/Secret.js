import React from 'react';
import { Link } from 'react-router-dom'

export default class Secret extends React.Component {
  render() {
    return (
    <div>
      <h1>Você não tem privilégios para ver esta pagina</h1>
      <Link to="/">Go Home</Link>
      <Link to="/cadastro">Cadastrar</Link>
      <Link to="/login">Login</Link>
    </div>
    );
  }
}
