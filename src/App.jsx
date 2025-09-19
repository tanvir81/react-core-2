import "./App.css";
import Counter from "./counter";
import Batsman from "./batsman";
import Users from "./user";
import { Suspense } from "react";
import Friends from "./friends";
import Posts from "./posts";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

const fetchPoasts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};
const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const postsPromise = fetchPoasts();
  const friendsPromise = fetchFriends();
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
      <Suspense fallback={<h3>Posts are coming...</h3>}>
        <Posts postsPromise={postsPromise}></Posts>
      </Suspense>
      <Suspense fallback={<h3>Friends Are Coming...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>

      {/* <Suspense fallback={<h3>Loading...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}

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
