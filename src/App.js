import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import "./App.css";
import db from "./firebases";
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  serverTimestamp,
  orderBy,
} from "firebase/firestore";

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);

  // when the app loads , we need to import everything from database
  useEffect(() => {
    // db.collection('todos').onSnapshot(snapshot => {
    //   console.log(snapshot.docs.map(doc => doc.data().todo));
    //   setTodos(snapshot.docs.map(doc => doc.data().todo));
    // })
    const q = query(collection(db, "todos"), orderBy("timestamp", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
        timestamp: doc.data().timestamp?.toDate().toLocaleString(),
      }));
      setTodos(data);
      // console.log(data)
      setLoading(false);
    });
    // console.log(todos)
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    addDoc(collection(db, "todos"), {
      text: input,
      timestamp: serverTimestamp(),
    });

    setTodos([...todos, { id: input, text: input }]);
    setInput("");
  };

  if (loading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }

  return (
    <div className="App">
      <h1>A dumb Todo App</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)}/> */}

        <FormControl>
          <InputLabel>Write todo here</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          disabled={!input}
          type="submit"
          onClick={addTodo}
          variant="contained"
        >
          Add todo
        </Button>
        {/* <button onClick={addTodo}>Add teri maa</button> */}
      </form>

      <ul>
        {todos.map((todo) => {
          return <Todo key={todo.id} data={todo} />;
        })}
      </ul>
    </div>
  );
}

export default App;
