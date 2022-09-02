import Todo from "./Todo";

function App() {
  return (
    <div className="App">
      <form>
        <input type="text" value="" placeholder="title" name="title" />
        <input type="text" value="" placeholder="content" name="content" />
        <input type="submit" value="submit" />
      </form>
      <Todo />
    </div>
  );
}

export default App;
