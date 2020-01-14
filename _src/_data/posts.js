const fetch = require("node-fetch");

module.exports = async function() {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(json => json);
};
