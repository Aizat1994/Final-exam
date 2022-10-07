import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import List from './components/List';
import Details from './components/Details';
import Form from './components/Form';
import Search from './components/Search';
import SearchbyName from './components/SearchbyName';
function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <div>
            <Link to="/">Home</Link>
          </div>
          <Form/>
        </nav>
        <Routes>
          <Route path='/' element={<List/>}/>
          <Route path='/name/:name' element={<Details/>}/>
          <Route path='/search_country/:country' element={<Search/>}/>
          <Route path='/search_name/:name' element={<SearchbyName/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;