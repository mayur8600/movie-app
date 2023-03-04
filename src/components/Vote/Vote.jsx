import { Autocomplete, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { styled } from '@mui/material/styles';

function Vote(props) {
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
  const options = ['5', '6', '7', '8', '9']
  const [value, setValue] = useState('');
  useEffect(() => {
    props.setSelectVote(value)
  }, [value])
  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      id="controllable-states-demo"
      options={options}
      sx={{ width: 300 }}
      renderInput={(params) => <CssTextField sx={{ input: { color: 'red' }, "label": { color: "red" } }} {...params} label='IMDb Rating' />}
    />
  )
}

export default Vote