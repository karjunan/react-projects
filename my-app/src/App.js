import Todo from "./component/Todo";

function App() {
  return (
    <div>
      <h1> My Todos</h1>
      <Todo text="Basic React" />
      <Todo text="Master React" />
      <Todo text="Expert React" />
    </div>
  );
}

export default App;
