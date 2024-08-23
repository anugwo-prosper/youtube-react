import React from 'react'
import { Link } from 'react-router-dom'

const MovieItem = ({x}) => {
  return (
    <div  className='container'>
          {/* ?.: means if thumbnails is there check, ? means query in react */}
          <Link to={`/video/${x.id.videoId}`} >
          <img src={x.snippet?.thumbnails?.medium?.url} alt="" />
          </Link>
          <h4>{x.snippet?.title}</h4>
        </div>
  )
  
}
// const Wrap = styled.div`
//     .Container{
//       display: flex;
//       width: 100vw;
//       flex-wrap: wrap;
//     }
//   `


export default MovieItem