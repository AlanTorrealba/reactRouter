import React from 'react'
import { useRouteError } from 'react-router-dom'
const error = useRouteError();
const Error = () => {
  return (
    <div>
      <p>{error.statusText || error.message}</p>
    </div>
  )
}

export default Error
