import React, { useState } from 'react'
import "./styles.css"
import { InputTodo }  from  "./components/InputTodo"
import { IncompleteTodos } from "./components/IncompleteTodos"


export const App = () => {
  // todo入力
  const [todoText,setTodoText] = useState("");
  const [incomTodos , setIncomTodos] = useState([]);
  const [complete , setComplete] = useState([])
  const onChangedTodoText = e => setTodoText(e.target.value)
  

  //要素の追加
  //未完了ゾーンへの追加
  const onClickAdd = ()=> {
    if(todoText === "")return
    const newTodos = [...incomTodos,todoText];
    setIncomTodos(newTodos);
    setTodoText("");
  }

//何行目かの情報がほしい
  const onClickDelete = (index) => {
    const newTodos = [...incomTodos]
    newTodos.splice(index, 1);
    setIncomTodos(newTodos);
  }

  const onClickComp = (index) => {
    const newIncompTodo = [...incomTodos]
    newIncompTodo.splice(index,1);
    const newCompTodo = [...complete,incomTodos[index]];
    setIncomTodos(newIncompTodo);
    setComplete(newCompTodo);
  }

  const onClickBack = (index)=> {
    const newCompleteTodos = [...complete]
    newCompleteTodos.splice(index,1);
    const newInCompTodo = [...incomTodos,complete[index]];
    setComplete(newCompleteTodos);
    setIncomTodos(newInCompTodo);
  }
  return (
    <>
    <InputTodo 
    todoText={todoText} 
    onChange={onChangedTodoText} 
    onClick = {onClickAdd}/>
      
    <incomTodos />


      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {complete.map((todo,index) => {
            return(
              <div key = {todo} className="list-row">
            <li>{todo}</li>
            <button onClick ={() => onClickBack(index)} >戻す</button>
            
          </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};