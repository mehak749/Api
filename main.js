function getJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("joke-setup").innerText = data.setup;
      document.getElementById("joke-punchline").innerText = data.punchline;
    })
    .catch(error => {
      document.getElementById("joke-setup").innerText = "Failed to load joke.";
      document.getElementById("joke-punchline").innerText = "";
      console.error(error);
    });
}
