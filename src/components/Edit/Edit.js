import React from 'react'
import '../../css/Edit/Edit.css'

function Edit({todo, setTodo}) {

  const delBtn = (id) => {
    const newTodo = todo.filter(todo => todo.id !== id)
    setTodo(newTodo)

  }

  const workingDone = (id) => {
    const addComplete = todo.map((initial) => {
      if(initial.id===id){
        return {
          ...initial,
          isDone : !initial.isDone,
        }
      } else {
        return {...initial}
      }
    })
    setTodo(addComplete)
  }

  return (
    <form>
      <div className='workingcard'> 
      <h2 className="cardlist"> I'm still Working🔥 </h2>
      <div className="workinglist"> {
          todo.map((item) => {
            if(!item.isDone){
              return (
                  <div key={item.id}>
                    <div className="todoList">
                      <div className="todo_title">{item.title} </div>
                      <div className="todo_content"> {item.content} </div>                            
                      <div className="allbtn">
                          <button className="editbtn" onClick={()=> workingDone(item.id)}>
                            {item.isDone? 'Cancle' : 'Complete'}
                          </button>
                          <button className="delbtn" onClick={()=> delBtn(item.id)}> Delete </button>
                      </div>
                    </div>
                  </div> 
              )} else{
              return null;
            }
      })}
      </div>

      <h2 className="cardlist"> It's already Done👏</h2>
      <div className="completelist"> {
        todo.map((item) => {
          if(item.isDone){
            return (
                <div key = {item.id}>
                  <div className="todoList">
                    <div className="todo_title">{item.title} </div>
                    <div className="todo_content"> {item.content} </div>
                    <div className="allbtn">
                      <button className="editbtn" onClick={()=> workingDone(item.id)}>
                        {item.isDone? 'Cancle' : 'Complete'}
                      </button>
                      <button className="delbtn" onClick={()=> delBtn(item.id)}> Delete </button>
                    </div>
                  </div>
                </div> 
            )} else{
            return null;
          }
      })} </div>
    </div>
  </form>
  )
}

export default Edit;