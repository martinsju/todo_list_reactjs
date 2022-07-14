import React, { useState } from 'react'

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


// EXTRA: remember to save new items in localstorage 

const ListPage = () => {
  const [list, setList] = useState(initialList)
  const [task, setTask] = useState('')
  // const [id, setId] = useState(list.)
  
  function handleChange(event) {
    setTask(event.target.value)
    console.log("setTask run");
  }

  function handleClick() {
    // add task in the list
    let lastID = list[list.length -1].id
    setList([...list, { id: lastID+1, task: task }])
  }

  return (
    <div>
      <h1>this is the todo list page</h1>
      <div className='list'>
        <p>Todo List:</p>
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.id} - {item.task}</li>
          ))}
        </ul>
      </div>
      <input type="text" placeholder="type here your next task" value={task} onChange={handleChange}></input>
      <button onClick={handleClick}>Add item</button>

    </div>
  )
}

export default ListPage