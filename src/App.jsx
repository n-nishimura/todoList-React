import React, { useState } from 'react'
import "./styles.css"
import { InputTodo }  from  "./components/InputTodo"
import {IncompleteTodos} from "./components/IncompleteTodos"
import {CompleteTodos} from "./components/CompleteTodos"


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
    todoText = {todoText} 
    onChange = {onChangedTodoText} 
    onClick = {onClickAdd}
    disabled = {incomTodos.length >= 5}
    />

    {incomTodos.length >= 5 && (<p style={{color:"red"}}>登録できるTodoは5個まで</p>) }
    
      
    <IncompleteTodos 
    todos = {incomTodos} 
    onClickComp = {onClickComp} 
    onClickDelete = {onClickDelete}/>


    <CompleteTodos
    todos = {complete} 
    onClickBack = {onClickBack}  
    />



    </>
  );
};