import React from 'react';
import { connect } from 'react-redux';
import Secret from './Secret';
import { actionLogout } from '../redux/actions';

class Content extends React.Component {
  render() {
    const { users, user, isLogged, logoff } = this.props;
    return (
    isLogged ? <div>
      <h1>Usuário Atual: </h1>
      <p>{ user.name }</p>
      <h2>Usuarios</h2>
      { users.map((item) => (
        <div>
          <p>Nome: {item.name}</p>
          <p>E-mail: {item.email}</p>
          <p>Idade: {item.age}</p>
        </div>
      )) }
      <button type="button" onClick={ logoff }>Deslogar</button>
    </div> : <Secret />
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
  user: state.user,
  isLogged: state.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  logoff: (state) => dispatch(actionLogout(state)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
