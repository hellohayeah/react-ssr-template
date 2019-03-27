import React from 'react'
import ParentContext from '../context'
import Children from './children'

const Parent = () => {
  const title = 'Hooks & ContextAPI Test'

  return (
    <div>
      <ParentContext.Provider value={title}>
        <Children />
      </ParentContext.Provider>
    </div>
  )
}

export default Parent
