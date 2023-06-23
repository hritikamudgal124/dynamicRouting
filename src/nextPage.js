import React from 'react'
import UserDetails from './User'

function nextPage() {
  return (
    <div>
      <h1>name {UserDetails.name}</h1>
      console.log({UserDetails.name})
    </div>
  )
}

export default nextPage
