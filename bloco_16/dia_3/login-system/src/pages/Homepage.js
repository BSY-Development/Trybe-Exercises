import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Homepage extends React.Component {
  render() {
    const { isLogged } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <Link to='/cadastro' >Cadastro</Link>
        <Link to='/login' >Login</Link>
        { isLogged ? <Link to="/content">Conteúdo</Link> : "" }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLogged: state.isLogged,
});

export default connect(mapStateToProps, null)(Homepage);
