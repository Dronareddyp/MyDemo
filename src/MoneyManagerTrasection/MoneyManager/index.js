import './index.css'
import { Component } from 'react'
import { v4 } from "uuid"
import MoneyDetails from "../MoneyDetails"
import TransactionItem from "../TransactionItem"

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    moneyList: [],
    title: "",
    amount: "",
    transactionTypeDrop: transactionTypeOptions[0].optionId
  }

  onMoneySUbmit = (event) => {
    event.preventDefault()
    const { title, amount,transactionTypeDrop } = this.state
    const filterIntials = transactionTypeOptions.find((each)=>each.optionId===transactionTypeDrop)
    const {displayText}=filterIntials
    const newMoney = {
      id: v4(),
      title: title,
      amount: parseInt(amount),
      transactionTypeDrop:displayText,
    }
    this.setState((prev) => ({
      moneyList: [...prev.moneyList, newMoney],
      title: "",
      amount: "",
      transactionTypeDrop:transactionTypeOptions[0].optionId,
    }))

  }
  onChangeTitle = (event) => {
    this.setState(({ title: event.target.value }))
  }
  onChangeAmount = (event) => {
    this.setState(({ amount: event.target.value }))
  }
  onChangeevent=(event)=>{
    this.setState(({
      transactionTypeDrop:event.target.value
    }))
  }
  onBalenceAmount = ()=>{
    const {moneyList} = this.state
    let balenceAmount = 0
    let incomeAmount = 0
    let expensesAmount=0
    moneyList.forEach((balence)=>{
      console.log("balance", balence)
      if(balence.transactionTypeDrop===transactionTypeOptions[0].displayText){
        incomeAmount+=balence.amount
      }else{
        expensesAmount+=balence.amount
      }
      // else if(balence.transactionTypeDrop===transactionTypeOptions[1].displayText){
      //   count-=balence.amount
      // }
    })
    balenceAmount = incomeAmount - expensesAmount
    return balenceAmount    
  }

  onincomeAmount = ()=>{
    const {moneyList} = this.state
    let count=0
    moneyList.forEach((balence)=>{
      console.log("balance", balence)
      if(balence.transactionTypeDrop===transactionTypeOptions[0].displayText){
              count+=balence.amount
      }
    })
    return count    
  }

  onIncomeExpenses = ()=>{
    const {moneyList} = this.state
    let count=0
    moneyList.forEach((balence)=>{
      console.log("balance", balence)
      if(balence.transactionTypeDrop===transactionTypeOptions[1].displayText){
              count+=balence.amount
      }
    })
    return count    
  }

  

  onDeleteMoneyList = (id) => {
    const { moneyList } = this.state
    const deleteFilter = moneyList.filter((each) => each.id !== id)
    this.setState(({
      moneyList: deleteFilter
    }))
  }

  render() {
    const { title, amount, moneyList, transactionTypeDrop} = this.state
    const incomeAmount = this.onincomeAmount()
    const expensesAmount= this.onIncomeExpenses()
    const incomeBalance = this.onBalenceAmount()
    return (
      <div>
        <div className="db-container">
          <h1>Hi, Richard</h1>
          <p>
            Welcome back to your <span>Money Manager</span>
        </p>
        </div>        
        <div>
             <MoneyDetails 
             incomeBalance={incomeBalance}
             incomeAmount={incomeAmount}
             expensesAmount={expensesAmount}/>
        </div>
        <h1>Add Transaction</h1>
        <form onSubmit={this.onMoneySUbmit}>
          <label htmlFor="title">TITLE</label>
          <input id="title" onChange={this.onChangeTitle} value={title} type="text" placeholder="TITLE" />
          
          <label htmlFor="amount">AMOUNT</label>
          <input id="amount" type="text" placeholder="AMOUNT" onChange={this.onChangeAmount} value={amount} />
          
          <label htmlFor="type">TYPE</label>
          <select id="type" onChange={this.onChangeevent} value={transactionTypeDrop}>
            {transactionTypeOptions.map((demo) => (
              <option key={demo.optionId} value={demo.optionId}>
                {demo.displayText}
                </option>
            ))
            }
          </select>
          <button type="submit">Add</button>
        </form>
        <div>
          <h1>History</h1>
          <ul>
            <li className="liitems1">
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
            </li>
              {
                moneyList.map((money) => (
                  <TransactionItem 
                   key={money.id}
                   transection={money} 
                   onTarsDelete = {this.onDeleteMoneyList}/>
                ))
              }
          </ul>
        </div>
      </div>
    )
  }
}
export default MoneyManager
