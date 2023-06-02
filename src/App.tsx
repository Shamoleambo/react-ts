import Todos from './components/Todos'
import Todo from './models/todo'

function App() {
  const todos = [
    new Todo('Learn to Fight'),
    new Todo('Learn to survive in a forest')
  ]

  return (
    <>
      <Todos items={todos} />
    </>
  )
}

export default App
