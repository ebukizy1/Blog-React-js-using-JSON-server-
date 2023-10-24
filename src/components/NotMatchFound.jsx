import React from 'react'
import { Link } from 'react-router-dom'

export const NotMatchFound = () => {

  return (
    <div>
        <h2> Sorry</h2>
        <p>That page cannot be found</p>
        <Link to='/'>  Back to homepage...</Link>
    </div>
  )
  }