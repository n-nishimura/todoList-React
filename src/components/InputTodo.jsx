import React from "react";


export const InputTodo = (props)=> {
  const { todoText , onChange , onClick , disabled } = props;
  return (
    /* reactの場合、classNameはキャメルケース記載 */
    <div className="input-area">
    <input disabled = {disabled}
          placeholder = "TODOを入力" 
          value = {todoText}
          onChange = {onChange}
    />
    
    <button disabled={disabled} onClick={onClick}>追加</button>
  </div>
  );
} 
