import React from 'react';
import { connect } from 'react-redux';
import Logado from './Logado';
import { actionLogin } from '../redux/actions/index';


class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.checkIfSigned = this.checkIfSigned.bind(this);
  }

  checkIfSigned() {
    const { email, password } = this.state;
    const { users, login } = this.props;
    const user = users.find((item) => item.email === email && item.password === password);
    if (user) {
      login(user);
      this.props.history.push('/content');
    } else {
      alert('Usuário não encontrado');
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    const { email, password } = this.state;
    const { isLogged } = this.props;
    return (
      !isLogged ? <div>
        <h1>Login</h1>
        <label>
          E-mail:
          <input name="email" value={ email } type="email" onChange={ this.handleChange } />
        </label>
        <label>
          Password
          <input name="password" value={ password } type="password" onChange={ this.handleChange } />
        </label>
        <button type="button" onClick={ this.checkIfSigned }>Login</button>
      </div> : <Logado />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(actionLogin(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
