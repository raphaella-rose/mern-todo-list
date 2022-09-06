import React from "react"


export const addTodo = async (todo) => {
  try {
    const res = await fetch('http://localhost:8080/todo/create', {
      method: "POST",
      body: JSON.stringify({
        title: todo.title,
        content: todo.content
      }),
      headers: {
        "Content-Type": "application/json"
      },
    });
  } catch (err) {}
}

const updateTodos = () => {
  addTodo({title: "Feed the dog", content: "chicken"}) //apiFunction
  .then(() => console.log("todo added"))
  .catch((err) => console.log(err));
}

function App() {
  updateTodos()
  return (
    <div className="App">
      <form>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="content" name="content" />
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
