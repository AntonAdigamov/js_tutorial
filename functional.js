let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// Returns a URL-friendly version of a string.
//   Example: "North Dakota" -> "north-dakota"
function urlify(string) {
  return string.toLowerCase().split(/\s+/).join("-");
}

// urls: Imperative version
function imperativeUrls(elements) {
  let urls = [];

  elements.forEach(
    function(element) {
      urls.push(urlify(element));
    }
  )
  return urls;
}
console.log(imperativeUrls(states));

// urls: Functional version
function imperativeUrls(elements) {
  return elements.map(element => urlify(element));
}
console.log(imperativeUrls(states));

// Returns full URLs
function fullURL(elements) {
  return elements.map(element => "https://example.com/" + urlify(element));
}
console.log(fullURL(states));
