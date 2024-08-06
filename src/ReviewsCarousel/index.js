import React, { Component } from 'react'
import "./index.css"

class ReviewsCarousel extends Component {
  state = {
    count: 0
  }

  onChangeleftValues = () => {
    const { count } = this.state
    console.log("llllll", count)
    const { reviewsList } = this.props
    if (count < reviewsList.length - 1) {
      this.setState((prove) => ({ count: prove.count + 1 }))
    }
  }
  onChangerightValues1 = () => {
    const { count } = this.state
    console.log("rrrrrr", count)
    if (0 < count) {
      this.setState((prove) => ({ count: prove.count - 1 }))
    }
  }

  render() {
    const { count } = this.state
    console.log("counr", count)
    const { reviewsList } = this.props
    const { imgUrl, username, companyName, description } = reviewsList[count]
    console.log("seoms", username)
    return (
      <div className="dg_container">
        <h1 className="headers">Reviews</h1>
        <div className="carousel_container">
          <button className="left_Arrow" type="button" data-testid="leftArrow" onClick={this.onChangerightValues1}>
            <img src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png" alt="left arrow" />
          </button>
          <div className="bodyOfSlider">
            <img className="imagesElement" src={imgUrl} alt={username} />
            <p className="paragraphs">{username}</p>
            <p className="paragraphE">{companyName}</p>
            <p className="paragraphE">{description}</p>
          </div>

          <button className="right_Arrow" type="button" data-testid="rightArrow" onClick={this.onChangeleftValues}>
            <img src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png" alt="right arrow" />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
