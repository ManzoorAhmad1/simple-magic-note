import "./App.css";
import Expense from "./Components/Expense/Expense";
// import TextFile from "./Components/TextFile.js"
import NewExpense from "./Components/NewExpense/NewExpense";
function App() {
  const addExpenseDataHandler=(parseData)=>{
    console.log("In App.js")
    console.log(parseData)
  }
  return (
    <>
      <NewExpense onAddExpenseData={addExpenseDataHandler} />
      <Expense/>
      {/* <TextFile/>  this is a practice file which show how javascript code working actualy behind the seen */}
    </>
  );
}

export default App;