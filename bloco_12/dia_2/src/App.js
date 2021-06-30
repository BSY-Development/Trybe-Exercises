import React from 'react';

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: 'São Paulo',
      tipo: '',
      resume: '',
      cargo: '',
      descCargo: '',
      alerta: false,
    }
  }

  // removeSpecial = (address) => address.replace(/[^\w\s]/gi, '');

  handleChange = ({ target }) => {
    if (target.name !== 'tipo') {
      this.setState({
        [target.name]: target.value,
      })
    }
    else {
      this.setState({
        [target.name]: target.id,
      })
    }
  }

  render() {
    return (
      <form>
        <fieldset>
          <label>Nome: 
            <input 
              type='text' 
              name='name' 
              maxLength='40' 
              onChange={this.handleChange}
              style={{ textTransform: 'uppercase'}} 
              required 
            />
          </label>
          <br />
          <label>E-mail: 
            <input 
              type='email' 
              name='email' 
              onChange={this.handleChange}
              maxLength='50' 
              required 
            />
          </label>
          <br />
          <label>CPF: 
            <input 
              type='text' 
              name='cpf' 
              onChange={this.handleChange}
              maxLength='11' 
              required 
            />
          </label>
          <br />
          <label>Endereço: 
            <input 
              type='text' 
              name='endereco' 
              onChange={this.handleChange}
              maxLength='200' 
              required 
            />
          </label>
          <br />
          <label>Cidade: 
            <input 
              type='text' 
              name='cidade' 
              onChange={this.handleChange}
              maxLength='28' 
              required /></label>
          <br />
          <label>Estado: 
            <select name='estado' onChange={this.handleChange}>
              <option>São Paulo</option>
              <option>Paraná</option>
              <option>Rio de Janeiro</option>
              <option>Acre</option>
            </select>
          </label> 
          <br />
          <label>Tipo: </label>
          <label>Casa <input type='radio' onChange={this.handleChange} name='tipo' id='casa' /></label>
          <label>Apartamento <input type='radio' onChange={this.handleChange} name='tipo' id='apartamento' /></label>
        </fieldset>
        <fieldset>
          <label>Resumo do currículo: 
            <textarea 
              name='resume' 
              onChange={this.handleChange}
              maxLength='1000' 
              required 
            />
          </label>
          <br />
          <label>Cargo: 
            <textarea 
              name='cargo'
              maxLength='40'
              onChange={this.handleChange}
              onMouseEnter={!this.state.alerta ? () => {
                alert('Preencha com cuidado esta informação.');
                this.setState({ alerta: true })
              } : () => console.log('Mensagem ja foi.')}
              required
            />
          </label>
          <br />
          <label>Descrição do Cargo: 
            <input 
              name='descCargo' 
              type='text' 
              onChange={this.handleChange}
              maxLength='500' 
              required 
            />
          </label>
          <br />

        </fieldset>
        <button type='submit'>Criar</button>
        <button type='reset'>Limpar</button>
      </form>
    );
  }
}

export default App;
