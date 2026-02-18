export function MetersList() {
  const meters = [
    { meterId: "MT-001", usage: 150, location: "Cape Town" },
    { meterId: "MT-002", usage: 200, location: "Durban" },
    { meterId: "MT-003", usage: 175, location: "Cape Town" },
  ];

  const metersList = meters.map((item) => (
    <li key={item.meterId}>
      {item.meterId} - {item.usage} kWh - {item.location}
    </li>
  ));

  return <ul>{metersList}</ul>;
}
