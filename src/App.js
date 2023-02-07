import "./App.css";

function App() {
  const age = 17;
  const isGreen = true;

  return (
    <div className="App">
      {age >= 18 ? <h1>Over Age</h1> : <h1>Under Age</h1>}
      <h1 style={{ color: isGreen ? "green" : "red" }}> This has color</h1>
      {isGreen && <button>This is a button</button>}
    </div>
  );
}

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
