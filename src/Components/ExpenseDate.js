import Card from "./ExpenseCard"
function ExpenseDate(props){
    const month=props.date.toLocaleString("en-US",{month:"long"})
    const day=props.date.toLocaleString("en-US",{day:"2-digit"});
    const year=props.date.getFullYear();
    return(
        <Card>
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
    )
}
export default ExpenseDate;
