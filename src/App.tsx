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

  const removeTodoHandler = (todoId: string): void => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId))
  }

  return (
    <>
      <NewTodo onAddTodo={addTodoHandler} />
      <Todos items={todos} onRemoveTodo={removeTodoHandler} />
    </>
  )
}

export default App
