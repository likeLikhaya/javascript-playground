//my mini temperature converter

// function that expects a value param when called
// this function converts celsius to fahrenheit
function celsiusToFahrenheit(value) {
  let convertCTF = (value * 5) / 9;
  console.log("celsiusToFahrenheit " + convertCTF);
  return convertCTF;
}

// this function converts fahrenheit to celsius
function fahrenheitToCelsius(value) {
  let convertFTC = value * 1.8 + 32;
  console.log("fahrenheitToCelsius " + convertFTC);
  return convertFTC;
}

// calling the functions with my own values
celsiusToFahrenheit(500);
fahrenheitToCelsius(70);
