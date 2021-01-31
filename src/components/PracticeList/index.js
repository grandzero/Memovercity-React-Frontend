import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItemDetails from './ListItem'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));
const test = [1,2,3,4,1,1,1,1,1,1,1,1];
export default function NestedList() {
  const classes = useStyles();
  

  return (
    <List
      style = {{marginTop:15}}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <h1>{"Story"} Exercises</h1>
        </ListSubheader>
      }
      className={classes.root}
    >
        {test.map((item,id) => {return <ListItemDetails key={id} />})}

    </List>
  );
}