import { List, ListItem, ListItemText } from '@mui/material';
import './Todo.css';
import React from 'react';

const Todo = ({data}) => {
  return (
    <div>
        {/* props is like attribute */}
        <List className='todo_list'>
          <ListItem>
            <ListItemText primary={data.text} secondary = "Aisehi kuch bhi"></ListItemText>
          </ListItem>
        </List>

    </div>
  )
}

export default Todo
