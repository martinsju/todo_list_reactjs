import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/modal";

// pre populated list
const initialList = [
  {
    id: 1,
    task: "Wash dishes",
  },
  {
    id: 2,
    task: "Study React",
  },
];

const listStorage = JSON.parse(localStorage.getItem("listKey"))
console.log("listStorage: ", listStorage)

const ListPage = () => {
  const textInputRef = useRef()
  const [list, setList] = useState(listStorage || initialList)
  const [task, setTask] = useState("")
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    textInputRef.current.focus();
    localStorage.setItem("listKey", JSON.stringify(list))
    console.log("task atual é ", list[list.length - 1])
    console.log("useEffect is running");
  }, [list]);

  function handleChange(event) {
    setTask(event.target.value);
    console.log("setTask run");
  }

  // add task in the list
  function handleClick() {
    let lastID = list[list.length - 1].id;
    setList([...list, { id: lastID + 1, task: task }])
    setTask("");
  }

  function openModal(item) {
    setToggleModal(true)
    console.log("item clicked ", item);
  }

  function closeModal() {
    // conditional to not click on li item
    if (toggleModal) {
      setToggleModal(false);
    }
    console.log("ESTOU FECHANDO O MODAL");
  }
 
  return (
    <div>
      <h1>This is the To-do list page</h1>
      <div className="list">
        <p>Todo List:</p>
        <ul>
          {list.map((item) => (
            <li key={item.id} onClick={() => openModal(item)}>
              {item.id}: {item.task}
            </li>
          ))}
        </ul>
      </div>
      <input
        className="inputArea"
        type="text"
        placeholder="type here your next task"
        value={task}
        onChange={handleChange}
        ref={textInputRef}
      ></input>
      <button onClick={handleClick}>Add item</button>
      <div>
        <p>Here the modal will appear</p>
        <Modal isVisible={toggleModal} onCloseModal={ closeModal } />
      </div>
    </div>
  );
};

export default ListPage;
