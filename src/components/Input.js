import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AutoComplete from './AutoComplete';
import FormControl from '@material-ui/core/FormControl';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TextInput() {
  const classes = useStyles();

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
          <AutoComplete />
        </FormControl>
      </Box>
    </div>
  );
}
