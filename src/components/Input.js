import React, { useState } from 'react';
import FoodList from '../list.json';
import InputLabel from '@material-ui/core/InputLabel';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [foodName, setFoodName] = useState('');
  const [timeToCook, setTimeToCook] = useState('');
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    const name = event.target.value;
    setFoodName(name);
    FoodList.forEach((item) => {
      if (item.name === name) {
        setTimeToCook(item.timeToCook);
      }
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Box
        height="70vh"
        display="flex"
        margin="auto"
        alignItems="center"
        justifyContent="center"
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label">
            Select Food
          </InputLabel>
          <Select
            labelId="demo-controlled-open-select-label"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={foodName}
            onChange={handleChange}
          >
            {FoodList.map((item) => {
              return (
                <MenuItem value={item.name} key={item.id}>
                  {item.name}
                </MenuItem>
              );
            })}
          </Select>
          <Typography variant="overline" color="inherit">
            Estimated Cooking time: {timeToCook}
          </Typography>
        </FormControl>
      </Box>
    </div>
  );
}
