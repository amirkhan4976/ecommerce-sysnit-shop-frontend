import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Header />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<HomeScreen />} />
            <Route exact path='/product/:id' element={<ProductScreen />} />
          </Routes>
        </div>
        <Login />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
