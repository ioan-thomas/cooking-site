import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Page components
import Home from './pages/home/Home.js'
import Create from './pages/create/Create.js'
import Search from './pages/search/Search.js'
import Recipe from './pages/recipe/Recipe.js'
import NavBar from './components/NavBar.js';
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme';

//  Styles
import './App.css'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Route>
          <NavBar/>
          <ThemeSelector />
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
          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
