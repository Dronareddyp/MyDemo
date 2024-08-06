import './index.css'
import {Component} from 'react'
const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here
class CapitalsDropDown extends Component {
  state = {
    isTrue: false,
    countryAndCapitalsid: countryAndCapitalsList[0].id,
  }

  onChangeevent = event => {
    this.setState({
      countryAndCapitalsid: event.target.value,
    })
  }

  onFiltering = () => {
    const {countryAndCapitalsid} = this.state
    const filterIntials = countryAndCapitalsList.find(
      each => each.id === countryAndCapitalsid,
    )
    console.log('filterIntials', filterIntials)
    return filterIntials
  }

  render() {
    const {countryAndCapitalsid} = this.state
    const {country} = this.onFiltering()
    console.log('getCountry', country)
    return (
      <div>
        <div>
          <h1>Countries And Capitals</h1>
          <div>
            <select
              className="select"
              onChange={this.onChangeevent}
              value={countryAndCapitalsid}
            >
              {countryAndCapitalsList.map(demo => (
                <option
                  key={demo.id}
                  onChange={this.onChangeevent}
                  value={demo.id}
                  className="option"
                >
                  {demo.capitalDisplayText}
                </option>
              ))}
            </select>
            <p>is capital of which country</p>
          </div>

          <p>{country}</p>
        </div>
      </div>
    )
  }
}
export default CapitalsDropDown
