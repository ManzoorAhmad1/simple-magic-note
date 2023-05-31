import "./ExpensiveItems.css";
import Card from "./ExpenseCard";
import ExpenseDate from "./ExpenseDate.js"
import React, { useState } from "react";

function ExpensiveItem(props) {
  const [title, setTitle] = useState(props.title);
  const clickedHandler = () => {
    setTimeout(() => {
      setTitle("updated!!!!!!");
      console.log(title);
    }, 2000);
  };

  return (
    <>
      <Card className="expense-item">
       <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">{props.amount}</div>
        </div>
        <button onClick={clickedHandler}>Clicked here</button>
      </Card>
    </>
  );
}
export default ExpensiveItem;
