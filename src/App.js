import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Login from './views/LoginPage';
import SignUpForm from './components/SignUpForm';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        {/* Add other routes as needed */}
      </Routes>
      <SignUpForm />
    </Router>
  );
}

export default App;
