import "./App.css";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { Home } from "./pages/Home";
// import { Profile } from "./pages/Profile";
// import { Contact } from "./pages/Contact";
// import { Navbar } from "./Navbar";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useState } from "react";

// const client = new QueryClient({
//   defaultOptions: {
//     queries: {
//       refetchOnWindowFocus: true,
//     },
// },
// });

// <div className="App">
//   /* <QueryClientProvider client={client}>
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/profile" element={<Profile />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="*" element={<h1> PAGE NOT FOUND </h1>} />
//       </Routes>
//     </Router>
//   // </QueryClientProvider/
// </div>
//   );
// }

// import Axios from "axios";
// import { useEffect, useState } from "react";

// function App() {
//   const [generatedExcuse, setGeneratedExcuse] = useState("");

//   const fetchExcuse = (excuse) => {
//     Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then(
//       (res) => {
//         setGeneratedExcuse(res.data[0].excuse);
//       }
//     );
//   };
//   return (
//     <div className="App">
//       <h1> Generate an Excuse </h1>
//       <button onClick={() => fetchExcuse("party")}>Party</button>
//       <button onClick={() => fetchExcuse("family")}>Family</button>
//       <button onClick={() => fetchExcuse("office")}>Office</button>

//       <p> {generatedExcuse} </p>
//     </div>
//   );
// }
// const [name, setName] = useState("");
// const [predictedAge, setPredictedAge] = useState(null);
// const fetchData = () => {
//   Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
//     setPredictedAge(res.data);
//   });
// };
// return (
//   <div className="App">
//     <input
//       placeholder="Ex. Major..."
//       onChange={(event) => {
//         setName(event.target.value);
//       }}
//     />
//     <button onClick={fetchData}> Predict Age </button>
//     <h1> Predict Name: {predictedAge?.name}</h1>
//     <h1> Predict Age: {predictedAge?.age}</h1>
//     <h1> Predict count: {predictedAge?.count}</h1>
//   </div>
// );

// const [catFact, setCatFact] = useState("");
// const fetchCatFact = () => {
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//   });
// };
// useEffect(() => {
//   Axios.get("https://catfact.ninja/fact").then((res) => {
//     setCatFact(res.data.fact);
//   });
// }, []);
// return (
//   <div className="App">
//     <button onClick={fetchCatFact}> Generate Cat Fact </button>
//     <p> {catFact} </p>
//   </div>
// );

//   const [todoList, setTodoList] = useState([]);
//   const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const task = {
//       id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
//       taskName: newTask,
//       completed: false,
//     };
//     setTodoList([...todoList, task]);
//   };

//   const deleteTask = (id) => {
//     const newTodoList = todoList.filter((task) => task.id !== id);

//     setTodoList(newTodoList);
//   };

//   const completeTask = (id) => {
//     setTodoList(
//       todoList.map((task) => {
//         if (task.id === id) {
//           return { ...task, completed: true };
//         } else {
//           return task;
//         }
//       })
//     );
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}> Add Task</button>
//         <div className="list">
//           {todoList.map((task) => {
//             return (
//               <Task
//                 taskName={task.taskName}
//                 id={task.id}
//                 completed={task.completed}
//                 deleteTask={deleteTask}
//                 completeTask={completeTask}
//               />
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

//  import useState hook
// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);

//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };

//   const setToZero = () => {
//     setCount(0);
//   };

//   // const handleInputChange = (event) => {
//   //   setInputValue(event.target.value);
//   // };
//   return (
//     <div className="App">
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={setToZero}>SET TO Zero</button>

//       {count}
//     </div>
//   );
// }

// create state to represent todo list (1. name of variable is "todoList, 2. name of function to change variable is "setToDoList", 3. then set initial value of variable to empty array "useState ([])
// const [todoList, setTodoList] = useState([]);
// keep track of value inside input and add it to list 1. create state to represent value of input (1. name of variable is "newTask" 2. name of function to change variable is "setNewTask" 3. then set initial value of variable to empty string "useState("");
// const [newTask, setNewTask] = useState("");

//   const handleChange = (event) => {
//     setNewTask(event.target.value);
//   };

//   const addTask = () => {
//     const newTodoList = [...todoList, newTask];
//     setTodoList(newTodoList);
//   };

//   return (
//     <div className="App">
//       <div className="addTask">
//         <input onChange={handleChange} />
//         <button onClick={addTask}> Add Task</button>
//       </div>
//       <div className="list">
//         {todoList.map((task) => {
//           return <h1>{task}</h1>;
//         })}
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";

// function App() {
//   const [count, setCount] = useState(0);
//   const increase = () => {
//     setCount(count + 1);
//   };

//   const decrease = () => {
//     setCount(count - 1);
//   };
//   const setToZero = () => {
//     setCount(0);
//   };

//   return (
//     <div className="App">
//       <button onClick={increase}>increase</button>

//       <button style={{ color: "red" }} onClick={decrease}>
//         decrease
//       </button>

//       <button style={{ color: "yellow" }} onClick={setToZero}>
//         setToZero
//       </button>
//       {count}
//     </div>
//   );
// }

// function App() {
//   const planets = [
//     { name: "Mars", isGasPlanet: false },
//     { name: "Earth", isGasPlanet: false },
//     { name: "Jupiter", isGasPlanet: true },
//     { name: "Venus", isGasPlanet: false },
//     { name: "Neptune", isGasPlanet: true },
//     { name: "Uranus", isGasPlanet: true },
//   ];

//   return (
//     <div className="App">
//       {planets.map((planet, key) =>
//         planet.isGasPlanet ? (
//           <h1 style={{ color: "green" }}> {planet.name}</h1>
//         ) : (
//           <h1 style={{ color: "red" }}>{planet.name}</h1>
//         )
//       )}
//     </div>
//   );
// }

// function App(){
//   const age = 17;
//   const isGreen = true;

//   return (
//     <div className="App">
//       {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
//       <h1 style={{ color: isGreen ? "green" : "red" }}> This has color</h1>
//       {isGreen && <button>This is a button</button>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Job salary={120000} position="senior sde" company="IBM" />
//       <Job salary={80000} position="doorman" company="Trump Tower" />
//       <Job salary={150000} position="Developer" company="Intel" />
//     </div>
//   );
// }

// const Job = (props) => {
//   return (
//     <div>
//       <h1>{props.salary}</h1>
//       <h1>{props.position}</h1>
//       <h1>{props.company}</h1>
//     </div>
//   );
// };

// export default App;
