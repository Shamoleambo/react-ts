import { useState } from 'react'
import NewTodo from './components/NewTodo'
import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText)
    setTodos((prevState) => [...prevState, newTodo])
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} />
    </>
  )
}

export default App
