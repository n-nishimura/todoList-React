import React from "react"

export const IncompleteTodos = (props) => {
  const {todos,onClickDelete,onClickComp} = props;
  return (
    <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {/* mapの引数の2つ目はインデックス番号が入ってくる */}
          {todos.map((todo,index)=>{
            return(
              <div key ={ todo }className="list-row">
                <li>{todo}</li>
                 {/* 関数に引数を渡していきたい場合はそのまま書くのではなくアロー関数で */}
                <button onClick = {() => onClickComp(index)}>完了</button>
                <button onClick = {() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
  );
}