import * as React from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme)=>({
  root: {
    backgroundColor:"red"
  },

}));

export default function Example() {
  const classes = useStyles();  
  return (
    <Box className={classes.root}>
      Example of components
    </Box>
  );
}