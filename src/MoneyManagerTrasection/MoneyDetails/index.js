import "./index.css"

const MoneyDetails =(props)=>{
    const {incomeBalance, incomeAmount, expensesAmount} = props
    // const {title, amount} =moneyListDetals
    return(
        <div className="image_container">
          <div className="cardImage">
            <img className="images"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png" alt="balance" />
            <div>
              <p>Your Balance</p>
              <p data-testid="balanceAmount">Rs {incomeBalance}</p>
            </div>
          </div>
          <div className="cardImage">
            <img className="images"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png" alt="income" />
            <div>
              <p>Your Income</p>
              <p data-testid="incomeAmount">Rs {incomeAmount}</p>
            </div>
          </div>
          <div className="cardImage">
            <img className="images"
              src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png" alt="expenses" />
            <div>
              <p>Your Expenses</p>
              <p data-testid="expensesAmount">Rs {expensesAmount}</p>
            </div>
          </div>
        </div>

    )
}
export default MoneyDetails