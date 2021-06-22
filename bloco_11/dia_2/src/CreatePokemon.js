import React from 'react';
import PropTypes from 'prop-types';
import './CreatePokemon.css'

class CreatePokemon extends React.Component {
  render() {
    return (<div className='outside-div'>
      <div className='inside-div'>
      <div>
        <p>{this.props.pokemon.name}</p>
        <p>{this.props.pokemon.type}</p>
        <p>{this.props.pokemon.averageWeight.value} {this.props.pokemon.averageWeight.measurementUnit}</p>
      </div>
        <img src={this.props.pokemon.image} alt={this.props.pokemon.name} />
    </div>
    </div>)
  }
}

CreatePokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number
    }),
    image: PropTypes.string,
  }).isRequired,
}

export default CreatePokemon