import './App.css';
import { BlogDetails } from './components/BlogDetails';
import { Create } from './components/Create';
import { Home } from './components/Home';
import { NavBar } from './components/NavBar';
import { BrowserRouter as Router ,Route,  Routes } from 'react-router-dom';
import { NotMatchFound } from './components/NotMatchFound';

function App() {
  

    return (
      <Router>
        <div className="App">
          <NavBar />
            <div className='content'>
              <Routes>
                <Route path='/'element={ <Home />}></Route>
                <Route path='/create' element={<Create/>}></Route>
                <Route path='/blog/:id' element={<BlogDetails />}> </Route>
                <Route path='*' element={<NotMatchFound />}></Route>
              </Routes>
          </div>
        </div>
      </Router>
    );
  }

export default App;
