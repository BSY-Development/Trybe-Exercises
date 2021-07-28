import React from 'react';
import { connect } from 'react-redux';
import { actionCadastrar } from '../redux/actions/index';
import Logado from './Logado';

class Cadastro extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      age: 0,
      password: '',
    }

    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({target}) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { name, email, age, password } = this.state;
    const { signUp, isLogged } = this.props;
    return (
      !isLogged ? <fieldset>
        <form>
          <label>
            Nome:
            <input onChange={ this.changeHandler } value={ name } name="name" type="text" required />
          </label>
          <br />
          <label>
            E-mail:
            <input onChange={ this.changeHandler } value={ email } name="email" type="email" required />
          </label>
          <br />
          <label>
            Idade:
            <input onChange={ this.changeHandler } value={ age } name="age" type="number" required />
          </label>
          <br />
          <label>
            Senha:
            <input onChange={ this.changeHandler } value={ password } name="password" type="password" required />
          </label>
          <button type="button" onClick={ () => signUp(this.state) }>Cadastrar</button>
        </form>
      </fieldset> : <Logado />
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  signUp: (state) => dispatch(actionCadastrar(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
