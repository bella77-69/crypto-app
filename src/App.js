
import './App.scss';
import Header from './components/Header/Header'
import Nav from './components/NavBar/Nav'
import CoinInfo from './components/Coins/CoinInfo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {/* <Nav /> */}
        <CoinInfo />
     hi
      </header>
    </div>
  );
}

export default App;
