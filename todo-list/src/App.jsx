import { useState } from "react";
function App() {
  const [todoList, setTodoList] = useState(["Eat", "Sleep", "Repeat"]);
  const [newItem, setNewItem] = useState("");

  const deleteToDo = (indexTodelete) => {
    const tempList = todoList.filter((el, index) => index !== indexTodelete);
    setTodoList(tempList);
  };

  const addTodo = () => {
    setTodoList([...todoList, newItem]);
    setNewItem("");
  };

  return (
    <>
      <h2>To-do List</h2>
      <input
        type="text"
        placeholder="Add Todo item"
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={() => addTodo()}>Add Todo</button>
      <div>
        {todoList.map((el, index) => (
          <li key={el}>
            {el}
            <button onClick={() => deleteToDo(index)}>Delete</button>
          </li>
        ))}
      </div>
    </>
  );
}
export default App;
