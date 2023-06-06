import { useRef, useContext } from 'react'
import classes from './NewTodo.module.css'
import { TodosContext } from '../store/todos-context'

const NewTodo: React.FC = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null)
  const todosCtx = useContext(TodosContext)

  const submitHandler = (event: React.FormEvent): void => {
    event.preventDefault()

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) return

    todosCtx.addTodo(enteredText)
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <label htmlFor='text'>Todo text</label>
      <input id='text' type='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  )
}

export default NewTodo
