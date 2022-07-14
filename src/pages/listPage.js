import React, { useState, useEffect, useRef } from "react";
import Modal from "../components/modal";

// pre populated list
const initialList = [];

const listStorage = JSON.parse(localStorage.getItem("listKey"))
const idStorage = JSON.parse(localStorage.getItem("idKey"));
console.log("listStorage: ", listStorage)

const ListPage = () => {
  const textInputRef = useRef()
  const [list, setList] = useState(listStorage || initialList)
  const [task, setTask] = useState("")
  const [id, setID] = useState(idStorage || 1)
  const [toggleModal, setToggleModal] = useState(false)

  useEffect(() => {
    textInputRef.current.focus();
    localStorage.setItem("listKey", JSON.stringify(list))
  }, [list]);

  useEffect(() => {
    localStorage.setItem("idKey", JSON.stringify(id));
  }, [id]);

  function handleChange(event) {
    setTask(event.target.value)
    console.log("setTask run")
  }

  // add task in the list
  function handleClick() {
    if (task) {
      setList([...list, { id: id, task: task }])
      setTask("")
      setID(prevValue => ++prevValue)
    }
  }

  function openModal(item) {
    setToggleModal(true)
    console.log("item clicked ", item);
  }

  function closeModal() {
    if (toggleModal) {
      setToggleModal(false);
    }
    console.log("i'm closing the modal now");
  }

  function renderItem(item) {

    function onPress() {
      openModal(item)
    }

    return(
      <li key={item.id} onClick={onPress}>
        {item.id}: {item.task}
      </li>
    )
  }
 
  return (
    <div>
      <h1>This is the To-do list page</h1>
      <div className="list">
        <p>Todo List:</p>
        <ul>
          {list.map(renderItem)}
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
