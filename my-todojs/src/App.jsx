import "./App.css";
import { useState } from "react";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setcompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };



  const onClickDelete = (index) => {
    const newTodos = [...setIncompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos)
  }


  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1)

    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]]
    setcompleteTodos(newCompleteTodos)
    setIncompleteTodos(newIncompleteTodos)
  }


  

  return (
    <>
      <InputTodo todoText={todoText} onChange={onChangeTodoText} onClick={onClickAdd}/>

      <div className="incomplete-area">
        <p className="title">未完了のtodo</p>
        <ul>
          {incompleteTodos.map((todo, index)={
            return (
              <div key={todo} className="list-row">


              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>


              </div>





            )




          }
          
          
          
          
          )} 



        </ul>


      </div>

      
    </>
  );
};

export default App;
