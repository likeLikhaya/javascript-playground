let meters = [
  { meterId: "MT-001", usage: 150, location: "Cape Town" },
  { meterId: "MT-002", usage: 200, location: "Durban" },
  { meterId: "MT-003", usage: 175, location: "Cape Town" },
];

console.log("print entire array:", meters);

console.log("print first meter usage:", meters[0].usage);

console.log("print second meter location:", meters[1].location);

// exercise 3 - using .map() & .filter()

// using .map() to get meterIds

const mapMethod = meters.map((item) => item.meterId);

console.log("Using .map() method ", mapMethod);

// using .filter() to get Cape Town meters

const capeTownMeters = meters.filter((meter) => meter.location === "Cape Town");

console.log(
  "Using .filter() to filter for Cape Town meters only ",
  capeTownMeters,
);

// using .filter() for meters with usage above 160

const meterUsuage = meters.filter((item) => item.usage > 160);

console.log("Using .filter() to filter meter usuage above 160 ", meterUsuage);

// using .filter() for meters NOT in Durban

const cityMeters = meters.filter((item) => item.location !== "Durban");

console.log("Using .filter() filter city ", cityMeters);

// Get IDs of only Cape Town meters

const capeTownMeterIds = meters
  .filter((item) => item.location === "Cape Town")
  .map((item) => item.meterId);

console.log("Get meterId for Cape Town meters ", capeTownMeterIds);

// Get usage values of meters over 160

const metersOver160 = meters
  .filter((item) => item.usage > 160)
  .map((item) => item.usage);

console.log("Get usage values of meters over 160 ", metersOver160);

// Create strings for only Durban meters

const durbanMeters = meters
  .filter((item) => item.location === "Durban")
  .map((item) => item.meterId + " used " + item.usage + " kWh");

console.log("Create strings for only Durban meters", durbanMeters);
