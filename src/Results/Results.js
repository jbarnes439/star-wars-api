import React from 'react';
import './Results.css'

export default function Results(props) {

  return (
    <ul>
      {props.searchResults.map((result, index) => {
        return <li key={`${result.name}-${index}`} className='li-name'>
          {result.name}:
          <div>
            <ul>
              <li>{result.gender}</li>
              <li> Height: {result.height} cm</li>              
              <li> Weight: {result.mass} kg</li>
              <li>Skin color: {result.skin_color}</li>
              <li>Appears in {result.films.length} episodes</li>
            </ul>
          </div>
        </li>
      })}
    </ul>
  )

}