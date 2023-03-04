import React, { useEffect, useState } from 'react'
import { Autocomplete, TextField } from '@mui/material';
import axios from 'axios';
import { styled } from '@mui/material/styles';

function Genre(props) {
  const [genres, setGenres] = useState([])
  const [genreObj, setGenreObj] = useState([])
  const [value, setValue] = useState('');
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_SECRET_KEY}&language=en-US`
    );
    setGenreObj(data?.genres)
    setGenres(data?.genres?.map((genre) => genre?.name));
  };

  useEffect(() => {
    fetchGenres();
  }, [])
  const CssTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'yellow',
      }
    },
  });
  useEffect(() => {
    const newD = value && genreObj.find((genre) => {
      if (genre.name === value) {
        return genre
      }
    });
    props.setSelectedGenre(newD && newD.id)
  }, [value])

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      id="controllable-states-demo"
      options={genres}
      sx={{ width: 300 }}
      renderInput={(params) => <CssTextField sx={{ input: { color: 'red' }, "label": { color: "red" } }} {...params} label='Select Genre' />}
    />
  )
}

export default Genre