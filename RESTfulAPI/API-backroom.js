const dreamsList = document.getElementById("dreams");
const dreamsForm = document.querySelector("form");

function appendNewDream(dreams) {
    console.log(dreams)

    let newListItem = "";

    for(let i = 0; i < dreams.dreams.length; i++){
        newListItem += `<li>${dreams.dreams[i].dream}</li>`;
        console.log(dreams.dreams[i].dream);
    }
    console.log(newListItem);
    dreamsList.innerHTML = newListItem;
}

fetch("/dreams")
    .then(response => (response.json())) // parse the JSON from the server
    .then(response => {
        appendNewDream(response);

        dreamsForm.addEventListener("submit", event => {
            event.preventDefault();

            const dreamApiURL = "https://watery-hammerhead-bay.glitch.me/dreams";
            const dreamObj = {
                "dream": dreamsForm.elements.dream.value
            }

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dreamObj),
            };
            fetch(dreamApiURL, options).then(function (response){
                console.log(response);
            }).then(response => fetch("/dreams").then(response => (response.json())).then(response => {appendNewDream(response);}))

        });
    });