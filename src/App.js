import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/HomePage/Home'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
