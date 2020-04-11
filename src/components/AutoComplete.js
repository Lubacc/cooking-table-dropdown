import React, { useState } from 'react';
import FoodList from '../list.json';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';

export default function AutoComplete() {
  const [timeToCook, setTimeToCook] = useState('');

  const onChange = (event, value) => {
    FoodList.forEach((item) => {
      if (item.name === value) {
        setTimeToCook(item.timeToCook);
      }
    });
  };
  return (
    <>
      <Typography variant="overline" color="inherit">
        Estimated Cooking time: {timeToCook}
      </Typography>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={FoodList.map((option) => option.name)}
        onChange={onChange}
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
