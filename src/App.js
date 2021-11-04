import ReqLandingPage from './Components/ReqLandingPage';
import PmoLandingPage from './Components/PmoLandingPage';
import LoginPage from './Components/LoginPage';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'

function App() {
  return (
    <>
      <Switch>
        <Route exact path='/' component={LoginPage}/>
        <Route exact path='/req' component={ReqLandingPage}/>
        <Route exact path='/pmo' component={PmoLandingPage}/>
        <Redirect to='/'></Redirect>
      </Switch>
    </>
  );
}

export default App;
