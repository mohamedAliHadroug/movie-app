import React,{Fragment} from 'react'
import MovieCard from './movieCard'
import StarRatingComponent from 'react-star-rating-component'



  const MovieList = ({movies} )=>{

    return (
        <Fragment>
            <div style={{display:"inline-flex"}} >
            <StarRatingComponent name="rate1" starCount={5} value={5}  className='stars'/>
            <h1 style={{color :'#473531', margin:'10px'}}> Box Office </h1>
            <StarRatingComponent name="rate1" starCount={5} value={5}  className='stars'/>
            </div>
            <div className="row">
            
            {movies.map((MovieInfos,index)=>{
                return <MovieCard key={index} title={MovieInfos.title} posterUrl={MovieInfos.posterUrl} description={MovieInfos.description} rate={MovieInfos.rate} />
            })}
            </div>
        </Fragment>
    )
  }

  export default MovieList
