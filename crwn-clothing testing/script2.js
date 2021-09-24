// const fetch = require("node-fetch");
const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

const getPeople = async (fetch) => {
  const response = await fetch("https://swapi.dev/api/people");
  const data = await response.json();

  return { count: data.count, results: data.results };
};

const getPeoplePromise = (fetch) => {
  return fetch("https://swapi.dev/api/people")
    .then((response) => response.json())
    .then((data) => {
      return { count: data.count, results: data.results };
    });
};

getPeoplePromise(fetch).then((data) => console.log(data));

module.exports = {
  getPeople,
  getPeoplePromise,
};
