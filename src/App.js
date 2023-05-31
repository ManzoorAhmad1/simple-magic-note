import "./App.css";
import Expense from "./Components/Expense/Expense.js";
// import TextFile from "./Components/TextFile.js"
import React, { useState } from "react";
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const demo_Data = [
    {
      id: "e",
      title: "Car Insurance",
      date: new Date(2023, 3, 22),
      amount : "234.23",
    },
    {
      id: "e1",
      title: "Tolit Paper",
      date: new Date(2023, 4, 2),
      amount: "345.23",
    },
    {
      id: "e2",
      title: "Study Table (wooden)",
      date: new Date(2023, 5, 12),
      amount: "123.23",
    },
    {
      id: "e3",
      title: "Books Collection",
      date: new Date(2023, 6, 3),
      amount: "155.23",
    },
  ];
  const [initialData, setInitalData] = useState(demo_Data);

  const addExpenseDataHandler = (parseData) => {
    setInitalData((prevParseData) => {
      return(
      [parseData, ...prevParseData])
    });
  };
  return (
    <>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expense item={initialData}  />
      {/* <TextFile/>  this is a practice file which show how javascript code working actualy behind the seen */}
    </>
  );
}

export default App;
