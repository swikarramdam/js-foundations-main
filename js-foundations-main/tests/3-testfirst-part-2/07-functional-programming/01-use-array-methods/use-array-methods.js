/* eslint-disable no-unused-vars */
arr = [1, 2, 3];
function indexAndValue(arr) {
  const newArr = arr.map(function (element, index) {
    return {
      index: index,
      value: element,
    };
  });
  return newArr;
}

function capitalize(str) {
  return str.toUpperCase();
}

function swapCase(str) {
  let result = "";

  let arr = str.split(" ");
  let newArr = arr.map(function (word, index) {
    //arr.map(callback(currentValue, index)), default call back function expects current value and index
    if (index % 2 === 0) {
      //or !index%2 as zero is not true
      return capitalize(word);
    } else return word;
  });
  return newArr.join(" ");
}

function extensionSearch(ext, arr) {
  //   let result = arr.filter((a) => a.endsWith("." + ext));
  let result = arr.filter((a) => a.slice(-3) === ext);
  return result;
}

function getPopulation(countryList, targetNames) {
  let selectedCountries = [];
  let totalPopulation;

  if (targetNames.length === 0) {
    selectedCountries = countryList;
  } else {
    selectedCountries = countryList.filter((country) =>
      targetNames.includes(country.name)
    );
  }
  totalPopulation = selectedCountries.reduce(
    (total, country) => total + country.population,
    0
  );
  return totalPopulation;
}
//0 is taken as initial value for an empty array which would cause error otherwise
// the syntax for any function in map, filter or reduce is array.map(arg=>condition)

// array.method(callback) --> callback = (element, index,array) => {function description}

//total, country are the parameters of the call back function, take it as accumulator and current value

function keyifyArrayOfObjects(key, arr) {
  let newVal = arr.reduce((accumulator, element) => {
    accumulator[element[key]] = element;
    return accumulator;
  }, {});
  return newVal;
}

function powerLevelAverage(arr) {
  let newVal = arr.reduce((accumulator, element) => {
    accumulator += element.powerLevel;
    return accumulator;
  }, 0);
  return Math.round(newVal / arr.length);
}

function mapReduce(arr, fn) {
  let newVal = arr.reduce((accumulator, element) => {
    let val = fn(element);
    accumulator.push(val);
    return accumulator;
  }, []);
  return newVal;
}

function filterReduce(arr, fn) {
  let filteredArray = arr.reduce((accumulator, element) => {
    if (fn(element)) {
      accumulator.push(element);
    }
    return accumulator;
  }, []);
  return filteredArray;
}

function inYourBudget(price, arr) {
  let filteredArr = arr.filter((element) => element.price <= price);
  let mappedArr = filteredArr.map((element) => element.item);
  return mappedArr;
}

//learning of the day: In multiline arrow function if you use curly braces you need to write return otherwise it will throw error, if it's one line simply remove {}, that will give implicit return.
superheroes = [
  {
    name: "Bruce Wayne",
    alias: "Batman",
    powerLevel: 50,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Wade Wilson",
    alias: "Deadpool",
    powerLevel: 90,
    universe: "Marvel Comics",
    race: "Mutant",
  },
  {
    name: "Peter Parker",
    alias: "Spiderman",
    powerLevel: 70,
    universe: "Marvel Comics",
    race: "Human",
  },
  {
    name: "Kristin Wells",
    alias: "Superwoman",
    powerLevel: 99,
    universe: "DC Comics",
    race: "Kryptonian",
  },
  {
    name: "Barry Allen",
    alias: "The Flash",
    powerLevel: 80,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Diana Prince",
    alias: "Wonder Woman",
    powerLevel: 90,
    universe: "DC Comics",
    race: "Human",
  },
  {
    name: "Ororo Munroe",
    alias: "Storm",
    powerLevel: 85,
    universe: "Marvel Comics",
    race: "Mutant",
  },
  {
    name: "Helen Parr",
    alias: "Elastigirl",
    powerLevel: 70,
    universe: "Dark Horse Comics",
    race: "Human",
  },
];

function separateAndReturnNames(superheroes, givenName, givenLength) {
  let updatedArr = superheroes.map((obj) => {
    let nameParts = obj["name"].split(" ");
    obj.firstName = nameParts[0];
    obj.lastName = nameParts[1];
    return obj;
  });
  let lastNameLength = updatedArr.filter(
    (obj) => obj[givenName].length <= givenLength
  );
  let lastNameOnly = lastNameLength.map((obj) => obj[givenName]);
  return lastNameOnly;
}

function priorityTodoDuration(arr) {
  let highPrio = arr.filter((obj) => obj.priority === "high");
  let duration = highPrio.reduce((accumulator, obj) => {
    return accumulator + obj.duration;
  }, 0);
  return duration;
}
