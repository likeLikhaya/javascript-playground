export function MetersList({ meters }) {
  const metersList = meters.map((item) => (
    <li key={item.meterId}>
      {item.meterId} - {item.usage} kWh - {item.location}
    </li>
  ));

  return <ul>{metersList}</ul>;
}
