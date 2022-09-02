import TodoList from "./TodoList";

const dummyTodos = [
  {
    title: "Wash the dog",
    content: "Strawberry shampoo"
  },
  {
    title: "Walk the dog",
    content: "in Richmond Park"
  },
  {
    title: "Feed the dog",
    content: "chicken"
  },
]
  


function App() {
  return (
    <div className="App">
      <form>
        <input type="text" value="" placeholder="title" name="title" />
        <input type="text" value="" placeholder="content" name="content" />
        <input type="submit" value="submit" />
      </form>
      <TodoList todos={dummyTodos} />
    </div>
  );
}

export default App;
