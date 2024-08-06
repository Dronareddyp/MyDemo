// Write your code here
import {Component} from 'react'


class Home extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
      console.log(event.target.value)
    this.setState({
      searchInput: event.target.value,
    })
  }
  

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props
    return (
      <div>
        <h1>Destination Search</h1>
        <input
          type="search"
          className="search_icon"
          value={searchInput}
          onChange={this.onChangeSearchInput}
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <div>
        {searchInput}
        </div>
        {/* <DestinationItem /> */}
      </div>
    )
  }
}
export default Home
