import './App.css';
import Table from './components/Table'
import Chart from "./components/Chart";
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Header from './components/Header';
import Home from './components/Home'
import History from './components/History';
import Alert from './components/Alert';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/history"><History /></Route>
        <Route exact path="/alerts"><Alert /></Route>
        <Route exact path="/table"><Table /></Route>
        <Route exact path="/graph"><Chart sid={1}/></Route>
      </Router>
    </div>
  );
}

export default App;
