import React, { useContext } from 'react'
import ParentContext from '../context'

const Children2 = () => {
  const title = useContext(ParentContext)

  return <h1>{title}</h1>
}

export default Children2
