import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

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
        <NavBar/> 
        <ThemeSelector />
        <Routes>
        {/* only displays this route */}
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
          <Route path="/recipes/:id" element={<Recipe />} />
          <Route path="*" element={<Navigate to="/" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
