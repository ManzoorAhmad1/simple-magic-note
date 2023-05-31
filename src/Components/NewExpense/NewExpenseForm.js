import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = (props) => {
  const [interTitle, setInterTitle] = useState("");
  const [interAmount, setInterAmount] = useState("");
  const [interDate, setInterDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   interTitle: "",
  //   interAmount: "",
  //   interDate: "",
  // });
  const titleChangeHandler = (event) => {
    setInterTitle(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   interTitle:,
    // });
    // setUserInput((inputValue)=>{
    //   return({...inputValue,interTitle:event.target.value})
    // })
  };
  const amountChangeHandler = (event) => {
    setInterAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   interAmount: "",
    // });
  };
  const dateChangeHandler = (event) => {
    setInterDate(event.target.value);
    //  setUserInput({
    //   ...userInput,
    //   interDate: "",
    // });
  };
  const formSubmitHandler = (event) => {
    event.preventDefault();
    const expenseFormData = {
      title: interTitle,
      amount: interAmount, 
      date: new Date(interDate),
    };
    props.onSaveExpenseData(expenseFormData)
    setInterTitle("");
    setInterAmount("");
    setInterDate("");
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={interTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={interAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={interDate}
            onChange={dateChangeHandler}
          />
        </div>
        <button className="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
