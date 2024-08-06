// Write your code here.
import {Component} from 'react'
// import './index.css'

class LettersCalculator extends Component {
  state = {
    calculaterInput: '',
  }
  onChangeInput = event => {
    this.setState({calculaterInput: event.target.value})
  }
  render() {
      const {calculaterInput} = this.state
    return (
      <div>
        <div>
          <h1>Calculate the Letters you enter</h1>
          <label for="html">Enter the phrase</label>
          <input
            className="inputValue"
            type="search"
            placeholder="Enter the phrase"
            id="html"
            value={calculaterInput}
            onChange={this.onChangeInput}
          />
        </div>
        <p>No.of letters:{calculaterInput.length}</p>
      </div>
    )
  }
}
export default LettersCalculator
