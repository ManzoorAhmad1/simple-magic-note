import "./ExpensiveItems.css";
function ExpensiveItem(){
    return(
        <div className="expense-item">
            <div>march 12th 2023</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$240.34</div>
            </div>
        </div>
    )
}
export default ExpensiveItem;