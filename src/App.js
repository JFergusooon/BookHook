import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/pages/Home";
import Store from "./components/pages/Store";
import Account from './components/pages/Account';

function App() {
  let privatePath = '/private/' + localStorage.getItem('username')

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>




      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path={privatePath} element={<Account />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
