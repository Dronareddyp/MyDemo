import React from "react"
import Loader from "react-loader-spinner"

import MovieCard from "../MovieCard"
import NavBar from "../NavBar"
import Pagination from "../Pagination"


class TopRated extends React.Component{
    state={
        isLoading:true,
        topRatedMovieResponse:{},
    }
    componentDidMount(){
        this.getTopRatedMoviesResponse()
    }

    getUpdatedDate=responseData=>({
        totalPages:responseData.total_pages,
        totalResults:responseData.total_results,
        results: responseData.results.map(eachMovie=>({
            id:eachMovie.id,
            posterPath:`https://image.tmdb.org/t/p/w500${eachMovie.poster_path}`,
            voteAverage:eachMovie.vote_average,
            title:eachMovie.title,
        }))
    })
    getTopRatedMoviesResponse = async (page = 1) => {
        const API_KEY = '655214fece85c7e86e4179dc2063d5e2'
        const apiUrl=`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${page}`
        const response = await fetch(apiUrl)
        const data = await response.json()
        const newData = this.getUpdatedDate(data)
        this.setState({isLoading: false, topRatedMovieResponse: newData})
      }

    renderLoadingView=()=>(
        <div className="loader-container">
            <Loader type="TailSpin" color="#32541"/>
        </div>
    )

    renderPopularMoviesList=()=>{
        const {topRatedMovieResponse}=this.state
        console.log(topRatedMovieResponse)
        const {results}=topRatedMovieResponse
        // console.log(topRatedMovieResponse)

        return(
            <ul className="row p-0 ms-0 mt-3">
                {
                    results.map(movie=>(
                        <MovieCard key={movie.id} movieDetails={movie}/>
                    ))
                }

            </ul>
        )
    }


    render(){
        const {isLoading, topRatedMovieResponse}=this.state
    return(
        <>
        <NavBar />
        <div>
            {isLoading?
            this.renderLoadingView()
            :this.renderPopularMoviesList()

            }
        </div>
            <Pagination totalPages={topRatedMovieResponse.totalPages}
            apiCallback={this.getTopRatedMoviesResponse}/>
        </>
    )
    }
}
export default TopRated