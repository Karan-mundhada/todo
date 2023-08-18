import { List, ListItem, ListItemText, Button } from "@mui/material";
import "./Todo.css";
import React from "react";
import db from "./firebases";
import { collection, deleteDoc, doc } from "firebase/firestore";

const Todo = ({ data }) => {
  return (
    <div>
      {/* props is like attribute */}
      <List className="todo_list">
        <ListItem>
          <ListItemText
            primary={data.text}
            secondary={`TODO created at ${data.timestamp}`}
          ></ListItemText>
        </ListItem>
        <Button
          onClick={(event) => deleteDoc(doc(collection(db, "todos"), data.id))}
        >
          Delete
        </Button>
      </List>
    </div>
  );
};

export default Todo;
