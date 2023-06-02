import React,{useState} from "react";
import ExpensiveItem from "./ExpensiveItems";
import ExpensesFilter from "./ExpenseFilter";
import "./Expense.css";
const Expense = (props) => {
  const [filterData,setFilterData]=useState("2020");
  // this is a third type to type ///////////////////
  // let filterContant = "Nothing to Show";
  // if (props.item.length > 0) {
  //   filterContant = props.item.map((expense) => (
  //     <ExpensiveItem
  //       key={expense.id}
  //       title={expense.title}
  //       amount={expense.amount}
  //       date={expense.date}
  //     />
  //   ));
  // }
  // this is a fourth step to type
  if(props.item.length===0){
    return <h2>Nothing to Show</h2>
  }
  const onSaveFilterData=(parseData)=>{
    setFilterData(console.log(parseData))
  }
  return (
    <div className="Expense">
      <ExpensesFilter selectedData={filterData } onFilterData={onSaveFilterData} />
      {/* this is a second step to type/////////////////////// */}
      {/* {filterContant} */}
      {/* this is a first step to type////////////////// */}
      {/* {props.item.length === 0 ? (
        <p>Nothing to Show</p>
      ) : (
        props.item.map((expense) => (
          <ExpensiveItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */}
      {/* this is a forth step to type */}
     { props.item.map((expense) => (
          <ExpensiveItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      {/* <ExpensiveItem
        title={props.item[0].title}
        date={props.item[0].Date}
        price={props.item[0].price}
      />
      <ExpensiveItem
        title={props.item[1].title}
        date={props.item[1].Date}
        price={props.item[1].price}
      />
      <ExpensiveItem
        title={props.item[2].title}
        date={props.item[2].Date}
        price={props.item[2].price}
      />
      <ExpensiveItem
        title={props.item[3].title}
        date={props.item[3].Date}
        price={props.item[3].price} 
      />    */}
    </div>
  );
};
export default Expense;
