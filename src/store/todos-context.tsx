import React, { useState } from 'react'
import Todo from '../models/todo'

type TodoContextObj = {
  items: Todo[]
  addTodo: (todoText: string) => void
  removeTodo: (todoId: string) => void
}

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {
    return
  },
  removeTodo: (todoId: string) => {
    return
  }
})

const TodosContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodoHandler = (todoText: string): void => {
    const newTodo = new Todo(todoText)
    setTodos((prevState) => [...prevState, newTodo])
  }

  const removeTodoHandler = (todoId: string): void => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId))
  }

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler
  }
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  )
}

export default TodosContextProvider
