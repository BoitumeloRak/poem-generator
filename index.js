function displayPoem(response) {
    console.log("poem generated");
    // let poemElement = document.querySelector("#poem");
    // poemElement.innerHTML = ""
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 1,
        cursor: "",
    });

}
// display the generated poem

function generatePoem(event) {
    event.preventDefault();
  // build the API URL
  
    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "00t205b501cf85d4fb3070o7a4913158";
    let prompt = `User instructions: Generate a French poem about ${instructionsInput.value}`;
    let context = 
        "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not at the beginning";
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("Generating poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);

    // make a call to the API
    axios.get(apiUrl).then(displayPoem);


   
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);