import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import useFetch from './useFetch';

export default function AutoComplete() {
  const [timeToCook, setTimeToCook] = useState('');
  const url = 'http://localhost:3004/foodNames';

  const { data } = useFetch(url);
  const optionsList =
    data && data.length > 0 && data.map((option) => option.name);
  console.log(optionsList);
  const onChange = (event, value) => {
    if (value !== '') {
      data.forEach((item) => {
        if (item.name === value) {
          setTimeToCook(item.timeToCook);
        }
      });
    }
  };
  return (
    <>
      <Typography variant="overline" color="inherit">
        Estimated Cooking time: {timeToCook}
      </Typography>
      <Autocomplete
        freeSolo
        disableClearable
        options={optionsList}
        onInputChange={onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search Foods"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    </>
  );
}
