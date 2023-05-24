import React, { useState } from "react";
import "./NewExpenseForm.css";
const NewExpenseForm = () => {
  // const [interTitle,setInterTitle]=useState("");
  // const [interAmount,setInterAmount]=useState("")
  // const [interDate,setInterDate]=useState("");
  const [userInput, setUserInput] = useState({
    interTitle: "",
    interAmount: "",
    interDate: "",
  });
  const titleChangeHandler = (event) => {
    //  setInterTitle(event.target.value)
    // in this way to update the data chooseAble data will be updated but other elem
    //  content cannot be lose it will show another Array
    // this is way it is not a good  
    // setUserInput({
    //   ...userInput,
    //   interTitle:,
    // });
    setUserInput((inputValue)=>{
      return({...inputValue,interTitle:event.target.value})
    })
  };
  const amountChangeHandler = (event) => {
    // setInterAmount(event.target.value);
    setUserInput({
      ...userInput,
      interAmount: "",
    });
  };
  const dateChangeHandler = (event) => {
    // setInterDate(event.target.value);
     setUserInput({
      ...userInput,
      interDate: "",
    });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" min="0.01" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2023-3-1"
            max="2023-6-1"
            onChange={dateChangeHandler}
          />
        </div>
        <button className="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default NewExpenseForm;
