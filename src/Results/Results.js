import React from 'react';

export default function Results(props) {

  return (
    <ul>
      {props.searchResults.map((result, index) => {
        return <li key={`${result.name}-${index}`}>{result.name}</li>
      })}
    </ul>
  )
    
}