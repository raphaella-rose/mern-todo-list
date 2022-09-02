import Todo from "./Todo";

const dummyTodo = {
  title: "Wash the dog",
  content: "Strawberry shampoo"
}

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" value="" placeholder="title" name="title" />
        <input type="text" value="" placeholder="content" name="content" />
        <input type="submit" value="submit" />
      </form>
      <Todo todo={dummyTodo} />
    </div>
  );
}

export default App;
