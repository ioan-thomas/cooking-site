import {useTheme} from '../hooks/useTheme'
import { Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'

// styles
import './RecipeList.css'

// assets
import TrashCan from '../assets/trash-can.svg'

export default function RecipeList({recipes}) {

  const {mode} = useTheme()

  if (recipes.length === 0){
    return <div className='error'>Sorry, we could not find any recipes with that keyword...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className='recipe-list'>
        {recipes.map(recipe => (
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make.</p>
                <div>{recipe.method.substring(0, 100)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img 
                alt='Trash icon to delete info'
                src={TrashCan}
                className='delete mode-toggle'
                onClick={() => handleClick(recipe.id)}
                style={{filter: mode === 'dark' ? 'invert(100%)' : 'invert(20%)'}}
                />
            </div>
        ))}
    </div>
  )
}
