import "./ExpensiveItems.css";
import Card from "./ExpenseCard";
function ExpensiveItem(props){
    const month=props.date.toLocaleString("en-US",{month:"long"})
    const day=props.date.toLocaleString("en-US",{day:"2-digit"});
    const year=props.date.getFullYear();
    const clickedHandler=()=>{
            console.log('clicked!!!!!!!!')
    }
    return(
        <Card className="expense-item">
            <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
            </div>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickedHandler}>Clicked here</button>
        </Card>  
    )
}
export default ExpensiveItem;  