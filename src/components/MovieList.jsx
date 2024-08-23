import React, { useState, useEffect, useContext } from 'react';
import { Movie } from '../Movie';
import styled from 'styled-components';

import MovieItem from './MovieItem';
const myurl = "https://youtube.com/video/"

const search = "terminator"
// const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&?${search}&key=guess&maxResults=50`
const url = 'https://youtube.googleapis.com/youtube/v3/'
const api_key = `?part=snippet&key=${process.env.REACT_APP_API_KEY}&q=chelsea`
const number = '&maxResults=50'
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=terminator&key=guess&maxResults=50
const MovieList = () => {
  const { movie, setMovie, searchKey, selectedMovie, setSelectedMovie } = useContext(Movie);

  useEffect(() => {
    const getMovie = async () => {
      // let searchData = JSON.parse(localStorage.getItem('data')zx)
      const type = searchKey ? 'search' : 'search';

      // if (searchData){
      //   setMovie(searchData)
      //   console.log(movie)
      // }else{
        const response = await fetch(`${url}${type}${api_key}${searchKey}${number}`)
        // const response = await fetch(`https://youtube.googleapis.com/youtube/v3/${type}?part=snippet&key=guess&q=${searchKey}&maxResults=50`)
      // 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyD8PtGw7UNYhfOGaYrzITtYoPcES3hN7iY&q'
      const movie = await response.json();
      // localStorage.setItem('data',JSON.stringify(movie.items))
      setMovie(movie.items)
      let currentIndex = 0; // Initialize the index counter
      setSelectedMovie(movie.items[0])

      console.log(movie.items);
    // }
      
      
    }
    getMovie()
  }, [setMovie, searchKey, setSelectedMovie]);

  return (
    <Wrapper>
      <div className='main'>
        {movie.map((x, index) => (

          <MovieItem key={index} x={x} />
        ))}
      </div>
    </Wrapper>
  )

  

}

const Wrapper = styled.div`
.main{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #0F0F0F;
  padding-top: 20px;
}
.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 25%;
  height: 280px;
}
img{
  border-radius: 10px;
}
h4{
  color: white;
}
`

export default MovieList