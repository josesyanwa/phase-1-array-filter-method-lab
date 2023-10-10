// Code your solution here
const drivers = [
    { name: 'John', hometown: 'New York' },
    { name: 'Jane', hometown: 'Los Angeles' },
    { name: 'Doe', hometown: 'Chicago' },
    { name: 'Bob', hometown: 'San Francisco' },
  ];
  
  // Function to find matching drivers by name (case insensitive)
  function findMatching(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase() === query.toLowerCase()
    );
  }
  
  // Function to find drivers whose names start with provided letters
  function fuzzyMatch(driversArray, query) {
    return driversArray.filter(driver =>
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // Function to match drivers by name in an array of driver objects
  function matchName(driverObjectsArray, query) {
    return driverObjectsArray.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }
  
  