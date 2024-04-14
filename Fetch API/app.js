// Fetch API:
// The fetch() method starts the process of fetching a resource from a server.
// The fetch() method returns a Promise that resolves to a Response object.

// Make a simple get request
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// Using Async/Await syntax:
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts/1");

// Fetching multiple urls
const urls = [
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
];

Promise.all(
  urls.map((url) =>
    fetch(url)
      .then((response) => response.json())
      .catch((error) => console.error("Error fetching", url, error))
  )
)
  .then((results) => console.log(results))// it will return array of object with all results.
  .catch((error) => console.error("Error:", error)); 

// Fetching and displaying image from a URL
const imageUrl = "https://static.toiimg.com/photo/80387978.cms";

fetch(imageUrl)
  .then((response) => response.blob())
  .then((blob) => {
    const imgElement = document.createElement("img");
    imgElement.src = URL.createObjectURL(blob);
    document.body.appendChild(imgElement);
  })
  .catch((error) => console.error("Error:", error));
// response.blob() is a method provided by the Fetch API to handle responses that contain binary data, such as images, audio, video, etc.