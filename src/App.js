import './App.css';
import TextFile from "./Components/TextFile.js"
import ExpensiveItem from "./Components/ExpensiveItems"
function App() {
  const expense=[
    {id:'e',title:"Car Insurance",Date:new Date(2023,3,22),price:"234.23"},
    {id:'e',title:"Tolit Paper",Date:new Date(2023,4,2),price:"345.23"},
    {id:'e',title:"Study Table (wooden)",Date:new Date(2023,5,12),price:"123.23"},
    {id:'e',title:"Books Collection",Date:new Date(2023,6,3),price:"155.23"}
  ]
  return (
    <>
    <h1>Let get staed</h1>
    <ExpensiveItem title={expense[0].title} date={expense[0].Date} price={expense[0].price}/>
    <ExpensiveItem title={expense[1].title} date={expense[1].Date} price={expense[1].price}/>
    <ExpensiveItem title={expense[2].title} date={expense[2].Date} price={expense[2].price}/>
    <ExpensiveItem title={expense[3].title} date={expense[3].Date} price={expense[3].price}/> 
    <TextFile/>
    </>
  );
}

export default App;
