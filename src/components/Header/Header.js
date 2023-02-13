import React, { useState } from "react";
import '../../css/Header/Header.css';

function Header({todo, setTodo}) {
  // const [initial, setInitial] = useState ([
  //   {
  //     id:0, 
  //     title : '', 
  //     content :'', 
  //     isDone : false
  //   }
  // ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addingTitle = (event) => {
    setTitle(event.target.value)
  }

  const addingContent = (event) => {
    setContent(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if(title.trim()==='' || content.trim()===''){
        alert("Please fill in the all-blank!")
      return;} 
    const addList = {
      id: todo.length +1,
      title: title,
      content: content
    }
    setTodo([...todo, addList])
  }

  return (
    <form onSubmit={onSubmitHandler} className="todopage" >
      <div className="header"> 
        <div> 🔴 🟡 🟢 My Todo List </div>
        <div> React ➕ ❏ </div>
      </div>
      <div className="inputform">
        <label> Title </label>
        <input className="inputbox" value = {title} onChange ={addingTitle} />

        <label> Content </label>
        <input className="inputbox" value = {content} onChange ={addingContent} /> 
        <button className="addbtn" onClick={onSubmitHandler}> Add </button> 
      </div>  
    </form>
  )
}

export default Header