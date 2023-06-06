import React from 'react'
import classes from './TodoItem.module.css'

const TodoItem: React.FC<{
  todoText: string
  todoId: string
  onRemoveTodo: (event: React.MouseEvent) => void
}> = (props) => {
  return (
    <li id={props.todoId} className={classes.item} onClick={props.onRemoveTodo}>
      {props.todoText}
    </li>
  )
}

export default TodoItem
