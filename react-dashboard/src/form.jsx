import { useState } from "react";

function Form({ onAddMeter }) {
  const [meterId, setMeterId] = useState();
  const [usageInput, setUsageInput] = useState();
  const [location, setLocation] = useState();

  return (
    <form>
      <input value={location} onChange={(e) => setLocation(e.target.value)} />
      <input value={meterId} onChange={(e) => setMeterId(e.target.value)} />
      <input
        value={usageInput}
        onChange={(e) => setUsageInput(e.target.value)}
      />
      <button onClick={onAddMeter}></button>
    </form>
  );
}

export default Form;
