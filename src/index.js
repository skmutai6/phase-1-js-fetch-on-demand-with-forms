const init = () => {
    const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => { //add event listeners and override form's behavior.
    event.preventDefault();
    const input = document.querySelector("input#searchByID"); // access input directly

    console.log(input.value);

    fetch(`http://localhost:3000/movies/${input.value}`) // fetch user input data
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector("section#movieDetails h4"); // access elements-
        const summary = document.querySelector("section#movieDetails p"); // -to manipulate what HTML renders with each selected movie id

        title.innerText = data.title; //movie details
        summary.innerText = data.summary; // movie details
      });
  });
}

document.addEventListener('DOMContentLoaded', init);