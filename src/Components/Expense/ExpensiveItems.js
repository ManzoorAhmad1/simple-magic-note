import "./ExpensiveItems.css";
import Card from "./ExpenseCard";
import React, { useState } from "react";
function ExpensiveItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  const [title, setTitle] = useState(props.title);
  const clickedHandler = () => {
    setTimeout(() => {
        setTitle("updated!!!!!!");
        console.log(title);
    }, 2000);
  };
  return (
    <Card className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.price}</div>
      </div>
      <button onClick={clickedHandler}>Clicked here</button>
    </Card>
  );
}
export default ExpensiveItem;
