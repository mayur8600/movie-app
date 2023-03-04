import React, { useEffect, useState } from 'react'
import axios from "axios";
import Box from '../Box/Box';
import Genre from '../Genre/Genre';
import Vote from '../Vote/Vote';
import styles from './homeComp.module.css'
import MaterialPagination from '../Pagination/Pagination';
function HomeComp() {
  const [page, setPage] = useState(1)
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState()
  const [selectedGenre, setSelectedGenre] = useState('')
  const [selectVote, setSelectVote] = useState('')
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${selectedGenre}&vote_average.gte=${+selectVote}`
    );
    setMovies(data.results)
    setTotalPages(data.total_pages)
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
  }, [selectedGenre, selectVote, page]);
  return (
    <>
      <div className={styles.flexBox}>
        <Genre setSelectedGenre={setSelectedGenre} />
        <Vote setSelectVote={setSelectVote} />
      </div>
      <div className="trending">
        {movies &&
          movies.map((movie) => (
            <Box
              key={movie.id}
              id={movie.id}
              poster={movie.poster_path}
              title={movie.title || movie.name}
              date={movie.first_air_date || movie.release_date}
              media_type="movie"
              vote_average={movie.vote_average}
            />
          ))}
      </div>
      <MaterialPagination setPage={setPage} totalPages={totalPages} />
    </>
  )
}

export default HomeComp