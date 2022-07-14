import React, { useState, useEffect } from 'react'

// pre populated list
const initialList = [
  {
    id: 1,
    task: 'Wash dishes'
  },
  {
    id: 2,
    task: 'Study React'
  }
];

const ListPage = () => {
  let textInput = ''
  const [list, setList] = useState(initialList)
  const [task, setTask] = useState('')
  
  useEffect(() => {
    textInput.focus()
    console.log("useEffect is running");
  }, [list])
  
  function handleChange(event) {
    setTask(event.target.value)
    console.log("setTask run");
  }
  
  // add task in the list
  function handleClick() {
    let lastID = list[list.length -1].id
    setList([...list, { id: lastID + 1, task: task }])
    setTask('')
    // EXTRA: remember to save new items in localstorage 
  }
  
  return (
    <div>
      <h1>This is the To-do list page</h1>
      <div className='list'>
        <p>Todo List:</p>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.id}: {item.task}</li>
          ))}
        </ul>
      </div>
      <input className='inputArea' type="text" placeholder="type here your next task" value={task} onChange={handleChange} ref={(input) => { textInput = input; }}></input>
      <button onClick={handleClick}>Add item</button>
    </div>
  )
}

export default ListPage