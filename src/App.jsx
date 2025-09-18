import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./user";
import { Suspense } from "react";

const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
  (res) => res.json()
);

function App() {
  function handleClick() {
    alert("I am Clicked");
  }
  const handleClick3 = () => {
    alert("clicked-3");
  };

  const handleAdd5 = (num) => {
    const newNumber = num + 5;
    alert(newNumber);
  };
  return (
    <>
      <h3>Vite + React</h3>
      <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me-1</button>
      <button
        onClick={function () {
          alert("clicked-2");
        }}
      >
        Click Me-2
      </button>
      <button onClick={handleClick3}>Click Me-3</button>
      <button onClick={() => handleAdd5(10)}>Click Me-4</button>
    </>
  );
}

export default App;
