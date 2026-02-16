let meterIds = ["MT-001", "MT-002", "MT-003", "MT-004", "MT-005"];

console.log("first in array " + meterIds[0]);

console.log("last in array " + meterIds.at(-1));

console.log("calculation of meters " + meterIds.length);

meterIds.push("MT-006");

console.log("Added new meter to the end " + meterIds);

meterIds.pop();

console.log("Removing the last meter " + meterIds);
