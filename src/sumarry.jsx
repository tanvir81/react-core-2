/**
 * Component
 * JSX
 * Props State
 * Events
 * [Conditional Rendering]
 */

// Server Side Data
/**
 * 1. API: url: https://jsonplaceholder.typicode.com/users
 */

// Normal Fetch
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));
// // async

/**
 * 1.just write a simple fetch
 * 2.Write the data loading component  under suspense
 */

// const loadData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = res.json();
//   return data;
// };
