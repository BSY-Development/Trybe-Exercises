import React from 'react';
import { connect } from 'react-redux';
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
    } else {
      console.log('user nao existe');
    }
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    })
  }

  render() {
    const { email, password } = this.state;
    return (
      <div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

const mapDispatchToProps = (dispatch) => ({
  login: (state) => dispatch(actionLogin(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
