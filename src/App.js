import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import NavBar from './components/navbar';
import UserContext from './components/context';
import Home from './components/home';
import CreateAccount from './components/createaccount';
import Deposit from './components/deposit';
import Withdraw from './components/withdraw';
import AllData from './components/alldata';

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider value={{users: [], currentUser: null, balance: 0}}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/create-account" element={<CreateAccount />} />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/all-data" element={<AllData />} />
          </Routes>
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
