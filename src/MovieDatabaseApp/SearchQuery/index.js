// import Loader from "react-loader-spinner"

// import MovieCard from "../MovieCard"
// import NavBar from "../NavBar"
// import Pagination from "../Pagination"

// import ConfigurationContext from "../../context/ConfigurationContext"

// const SearchQuery=()=>{
//     const renderEmptyView=()=>(
//         <div className="empty-view-container">
//             <h1>No results found.</h1>
//             <p>Do not get worried, Try to search again.</p>
//         </div>
//     )

//     const renderMovieList=searchResponse=>{
//         const {result}=searchResponse

//         if(!result.length){
//             return renderEmptyView()
//         }
//         return(
//             <ul className="row p-0 ms-0 me-0 mt-3">
//                 {result.map(movie=>(
//                     <MovieCard key={movie.id} movieDetails={movie}/>
//                 ))

//                 }

//             </ul>
//         )
//     }

//     const renderLoadingView=()=>{
//         <div className="loader-container">
//             <Loader type="TailSpin" color="#032541"/>
//         </div>

//     }

//     const rendersearchResultViews=value=>{
//         const {searchResponse, apiStatus}=value

//         switch(apiStatus){
//             case "IN_PROGRESS":
//                 return renderLoadingView()
//             case "SUCCESS":
//                 return renderMovieList(searchResponse)
//             default:
//                 return renderEmptyView()        
//         }
//     }
//     return(
//         <ConfigurationContext.Consumer>
//            {value=>{
//                const {searchResponse, onTriggerSearchingQuery}=value
//                return(
//                 <>
//                 <NavBar/>
//                 <div className="route-page-body">
//                     {rendersearchResultViews(value)}
//                 </div>                
//                 <Pagination 
//                 totalPages={searchResponse.totalPages}
//                 apiCallback={onTriggerSearchingQuery}
//                 />
//                 </>


//                )
            
//            }}
//         </ConfigurationContext.Consumer>
//     )
// }
// export default SearchQuery



import Loader from 'react-loader-spinner'

import MovieCard from '../MovieCard'
import NavBar from '../NavBar'
import Pagination from '../Pagination'

import ConfigurationContext from '../../context/ConfigurationContext'

// import './index.css'

const SearchQuery = () => {
  const renderEmptyView = () => (
    <div className="empty-view-container">
      <h1>No results found.</h1>
      <p>Don not get worried, Try to search again.</p>
    </div>
  )

  const renderMoviesList = searchResponse => {
    const {results} = searchResponse

    if (!results.length) {
      return renderEmptyView()
    }
    return (
      <ul className="row p-0 ms-0 me-0 mt-3">
        {results.map(movie => (
          <MovieCard key={movie.id} movieDetails={movie} />
        ))}
      </ul>
    )
  }

  const renderLoadingView = () => (
    <div className="loader-container">
      <Loader type="TailSpin" color="#032541" />
    </div>
  )

  const renderSearchResultViews = value => {
    const {searchResponse, apiStatus} = value

    switch (apiStatus) {
      case 'IN_PROGRESS':
        return renderLoadingView()
      case 'SUCCESS':
        return renderMoviesList(searchResponse)
      default:
        return renderEmptyView()
    }
  }

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {searchResponse, onTriggerSearchingQuery} = value

        return (
          <>
            <NavBar />
            <div className="route-page-body">
              {renderSearchResultViews(value)}
            </div>
            <Pagination
              totalPages={searchResponse.totalPages}
              apiCallback={onTriggerSearchingQuery}
            />
          </>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default SearchQuery