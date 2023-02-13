import React, {useState} from 'react'
import Header from '../components/Header/Header.js'
import Edit from '../components/Edit/Edit.js'
import '/Users/eunjin/Desktop/React/react/week-1/src/css/Pages/Todo.css'

function Todo() {

  const [todo, setTodo] = useState([
    {id:1, title:'리액트 공부하기', content: '리액트기초를 공부하자!', isDone :false },
    {id:2, title:'JS 공부하기', content: 'js공부를 해보자!', isDone : true },
  ])


  return (
    <form className='todolayout'>
      <Header todo={todo} setTodo={setTodo} />
      <Edit todo={todo} setTodo={setTodo} />
    </form>
  )
}

export default Todo