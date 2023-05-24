import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm"
const NewExpense =(props)=>{
    const saveExpenseFormDate=(enterData)=>{
        let expenseData={
            ...enterData,
            id:Math.random().toString(),
        }
       props.onAddExpenseData (expenseData)
    }
    return(
        <div className="new-expense">
         <div>
            <NewExpenseForm onSaveExpenseData={saveExpenseFormDate} />
         </div>
        </div>
    )
}
export default NewExpense;