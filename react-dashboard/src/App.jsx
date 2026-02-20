import "./App.css";
import { MetersList } from "./metersList";
// import { Form } from "./form";

function App() {
  const meters = [
    { meterId: "MT-001", usage: 150, location: "Cape Town" },
    { meterId: "MT-002", usage: 200, location: "Durban" },
    { meterId: "MT-003", usage: 175, location: "Cape Town" },
  ];

  function onAddMeter() {}

  return (
    <>
      <div>
        <h1> Meters Metrics Per City</h1>
      </div>
      {/* <Form /> */}
      <MetersList meters={meters} />
    </>
  );
}

export default App;
