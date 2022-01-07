import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header'
import Nav from './components/NavBar/Nav'
import CoinInfo from './components/Coins/CoinInfo';
import Footer from './components/Footer/Footer';
import Exchange from './components/Exchange/Exchange';

function App() {
  return (
    <div className="App">
      <Router >
      <Nav />
      <Switch>
      <header className="App-header">
    
        <Header />
       
      <Exchange />
        <CoinInfo />
  
     <Footer />
      </header>
      </Switch>
     </Router>
    </div>
  );
}

export default App;
