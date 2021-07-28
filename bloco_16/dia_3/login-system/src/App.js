import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Cadastro from './pages/Cadastro';
import Content from './pages/Content';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ Homepage } />
        <Route path="/cadastro" component={ Cadastro } />
        <Route path="/content" component={ Content } />
        <Route path="/login" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
