import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';
import './App.css'

// page componenets
import Navbar from './components/Navbar';
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import Recipe from './pages/recipe/Recipe'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route>
            <Home exact path="/" />
          </Route>
          <Route>
            <Create path="/create" />
          </Route>
          <Route>
            <Search path="/search" />
          </Route>
          <Route>
            <Recipe path="/recipes/:id " />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
