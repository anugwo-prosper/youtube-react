import React, { useContext } from 'react'
import { Movie } from '../Movie'

const Banner = () => {
    let {selectedMovie, setSelectedMovie}= useContext(Movie)
  return (
    <div style={{backgroundImage: `url(${selectedMovie?.snippet?.thumbnails?.high?.url})`, height:'80vh', backgroundSize:'cover', backgroundRepeat:'no-repeat'}}>
      
        <span style={{color:'white', marginBottom:'100px'}}>{selectedMovie?.snippet?.title}</span>
        <div>{selectedMovie?.snippet?.description}</div>

    </div>
  )
}

export default Banner
