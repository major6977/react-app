import "./App.css";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };
  const setToZero = () => {
    setCount(0);
  };

  return (
    <div className="App">
      <button onClick={increase}>increase</button>

      <button style={{ color: "red" }} onClick={decrease}>
        decrease
      </button>

      <button style={{ color: "yellow" }} onClick={setToZero}>
        setToZero
      </button>
      {count}
    </div>
  );
}

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

export default App;
