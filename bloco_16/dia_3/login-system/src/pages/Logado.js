import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { actionLogout } from '../redux/actions';

class Logado extends React.Component {
  render() {
    const { logoff } = this.props;
    return <div>
      <h1>Você ja esta logado</h1>
      <Link to="/">Go Home</Link>
      <Link to="/"><button onClick={ logoff }>Realizar Logout</button></Link>
    </div>
  }
}

const mapDispatchToProps = (dispatch) => ({
  logoff: (state) => dispatch(actionLogout(state)),
});

export default connect(null, mapDispatchToProps)(Logado);
