import { React, useEffect } from 'react';
import './App.css';
import { Header } from './Component/Header/Header';
import { Home } from './Component/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './Component/Login/Login';
import { Checkout } from './Component/Checkout/Checkout';
import { auth } from './Component/firebase';
import { useStateValue } from './Component/StateProvider';
import { Payment } from './Component/Payment/Payment';


function App() {

  // eslint-disable-next-line no-empty-pattern
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('The User Is === ', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })

      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })

  }, [])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<><Header /><Checkout /></>} />
          <Route path="/Payment" element={<><Header /><Payment /></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
