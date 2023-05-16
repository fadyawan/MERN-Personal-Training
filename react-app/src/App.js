import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import AboutPage from './Pages/AboutPage/AboutPage';
import { Route, Link } from 'react-router-dom';
import { Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
      </Routes>
    </div>
  );
}

export default App;