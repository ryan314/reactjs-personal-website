import React from 'react'
import { useParams } from 'react-router-dom';

function Hobbies() {
  let { id } = useParams();

  return (
    <div>This is the { id } hobby!</div>
  )
}

export default Hobbies;