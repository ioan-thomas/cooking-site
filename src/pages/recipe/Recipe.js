// styles
import './Recipe.css'

import React, {useEffect} from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useParams, useHistory } from 'react-router-dom'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data: recipe, isPending, error} = useFetch(url)
  const history = useHistory()

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push('/')
      }, 2000)
    }
  }, [error, history])

  return (
    <div className='recipe'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {recipe && (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.ingredients}</p>
          <h3>{recipe.method}</h3>
          <p>{recipe.cookingTime}</p>
          
        </>
      )}
    </div>
  )
}
