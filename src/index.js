const init = () => {
    const inputForm = document.querySelector("form");
    // add an event listener on the form so when the user submits it, it does something
    inputForm.addEventListener("submit", handleEvent);
  
}

document.addEventListener('DOMContentLoaded', init);

// create a funciton that will handle our event and that we can pass into our event listenerer as a callback
function handleEvent(event) {
    // prevent default browser refresh
    event.preventDefault();
    // finding and saving our target(what element we want to single out) to a variable so we can extract the users input from it.
    const userInput = document.querySelector("#searchByID").value;
    //console.log(userInput);
    //sending a request to the server to request data. putting         ${userInput}     at the end of the URL to only request the data that the users input is requesting
    fetch(`http://localhost:3000/movies/${userInput}`)
    // .then is used to tell javascript to wait before running the code directly after it. then we pass in a function which we use   .json on to parse the returned data into data that javascript can work with
    .then(res => res.json())
    // then we are taking that parsed data and doing something with it
    .then(data => {
    //console.log(data)
    // finding and saving our element that we want to change on the webpage
    const title = document.querySelector("h4")
    const summary = document.querySelector("p")
    // changing the element on our webpage to match our users input
    title.innerHTML = data.title;
    summary.innerHTML = data.summary;
    })
}
