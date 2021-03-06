import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

// components
import Searchbar from './Searchbar'

// styles
import './NavBar.css'

export default function NavBar() {

  const { color } = useTheme()

  return (
      <div className="navbar" style={{background: color}}>
        <nav>
            <Link to="/" className='brand'>
                <h1>A Recipe for Disaster</h1>
            </Link>
            <Searchbar />
            <Link to="/create">
                Create Recipe
            </Link>
        </nav>
      </div>
  )
}
