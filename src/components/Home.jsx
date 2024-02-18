import React, { useEffect, useState } from 'react';
import axiosInstance from '../axios.instance';
import './Home.css';

function Home({ title, fetchUrl, isPoster }) {
  const [allMovies, setAllMovies] = useState();
  const base_url = 'https://image.tmdb.org/t/p/original/';

  const fetchData = async () => {
    const { data } = await axiosInstance.get(fetchUrl);
    setAllMovies(data.results);
  };
  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='row'>
      <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: 'white', marginLeft: '26px', marginBottom: '20px' }}>{title}</h1>

      <div className='movies-row'>
      {allMovies?.map((item, index) => {
  console.log('Poster Path:', item.poster_path);
  console.log('Backdrop Path:', item?.backdrop_path);
  return (
    <div key={index} className={`b-game-card ${isPoster && 'movie-poster'}`}>
      <div
        className='b-game-card__cover'
        style={{
          backgroundImage: `url(${isPoster ? base_url + item.poster_path : base_url + item?.backdrop_path})`,
        }}
      >
        <div className='b-game-card__info'>
          <h5>{item.title || item.name}</h5>
          <p>IMDB Rating: {Math.ceil(item.vote_average)}</p>
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
}


export default Home;
