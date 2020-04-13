import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@material-ui/core';

export default (Header) => (
  <AppBar position="static">
    <Toolbar>
      <Box
        display="flex"
        margin="auto"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="h6" color="inherit">
          Cooking Time List
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);
