import { div } from 'prelude-ls';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.componet';

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} ></Route>
        <Route path='/hats' component={HatsPage} ></Route>
      </Switch>
    </div>
  );
}

export default App;
