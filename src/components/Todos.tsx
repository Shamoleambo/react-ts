import React from 'react'
import TodoItem from './TodoItem'
import Todo from '../models/todo'
import classes from './Todos.module.css'

const Todos: React.FC<{
  items: Todo[]
  onRemoveTodo: (todoId: string) => void
}> = (props) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          todoText={item.text}
          todoId={item.id}
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  )
}

export default Todos
