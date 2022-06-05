import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Page components
import Home from './pages/home/Home.js'
import Create from './pages/create/Create.js'
import Search from './pages/search/Search.js'
import Recipe from './pages/recipe/Recipe.js'
import NavBar from './components/NavBar.js';

//  Styles
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route>
          <NavBar/>
        </Route>
        <Switch>
        {/* only displays this route */}
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
