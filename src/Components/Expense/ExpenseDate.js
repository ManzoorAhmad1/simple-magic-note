import Card from "./ExpenseCard"
import "./ExpenseDate.css";
function ExpenseDate(props){
    const month=props.date?.toLocaleString("en-Us",{month:"long"})
    const day=props.date?.toLocaleString("en-Us",{day:"2-digit"})
    const year=props.date?.getFullYear();
    return(
        <Card>
           <div className="expense_date">
          <div className="expense_date__day">{month}</div>
          <div className="expense_date__month">{day}</div>
        <div className="expense_year__year">{year}</div>
        </div>
        </Card>
    )
}
export default ExpenseDate;