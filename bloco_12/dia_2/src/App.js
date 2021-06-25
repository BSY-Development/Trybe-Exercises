import React from 'react';

class App extends React.Component {
  render() {
    return (
      <fieldset>
        <form>
          <label>Nome: <input type='text' name='name' maxLength='40' style={{ textTransform: 'uppercase'}} required /></label>
          <br />
          <label>E-mail: <input type='email' name='email' maxLength='50' required /></label>
          <br />
          <label>CPF: <input type='text' name='cpf' maxLength='11' required /></label>
          <br />
          <label>Endereço: <input type='text' name='endereco' maxLength='200' required /></label>
          <br />
          <label>Cidade: <input type='text' name='cidade' maxLength='28' required /></label>
          <br />
          <label>Estado: 
            <select>
              <option>São Paulo</option>
              <option>Paraná</option>
              <option>Rio de Janeiro</option>
              <option>Acre</option>
            </select>
          </label> 
          <br />
          <label>Tipo: </label>
          <label>Casa <input type='radio' name='tipo' id='casa' checked /></label>
          <label>Apartamento <input type='radio' name='tipo' id='apartamento' /></label>
        </form>
      </fieldset>
    );
  }
}

export default App;
