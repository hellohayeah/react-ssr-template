import React, { useState, useEffect } from 'react'

const useAbout = () => {
  const [count, setCount] = useState(100)
  const [name, setName] = useState('Hooks')
  const [todos, setTodos] = useState([{ id: 0, text: 'Learn Hooks' }])

  useEffect(() => {
    document.title = `You clicked ${count} times`
    console.log(`更新後${count}`)
  }, [count])

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>{name}</p>
      {todos.map(todo => (
        <p key={todo.id}>{todo.text}</p>
      ))}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default useAbout
