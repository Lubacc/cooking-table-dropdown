import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Typography from '@material-ui/core/Typography';
import { useFetch } from './useFetch';

export default function AutoComplete() {
  const [timeToCook, setTimeToCook] = useState('');
  const url = 'http://localhost:3004/foodNames';
  const { data } = useFetch(url);
  console.log(data);
  // const onChange = (event, value) => {
  //   if (value !== '') {
  //     FoodList.forEach((item) => {
  //       if (item.name === value) {
  //         setTimeToCook(item.timeToCook);
  //       }
  //     });
  //   }
  // };
  return (
    <>
      <Typography variant="overline" color="inherit">
        Estimated Cooking time: {timeToCook}
      </Typography>
      <Autocomplete
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        //options={typeof(data) !== 'undefined'? data.map((option) => option.name) : }
        //onInputChange={onChange}
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
