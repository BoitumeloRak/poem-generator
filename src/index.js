function displayPoem(response) {
    let poemElement = document.querySelector("#poem");
    poemElement.innerHTML = "";

    let answer = response.data.answer;

    let cleanAnswer = answer
        .replace(/Zulu:/g, "Zulu")
        .replace(/English:/g, "<br><br>English:")
        .replace(/Meaning:/g, "<br><br>Meaning:");

    new Typewriter("#poem", {
        strings: cleanAnswer,
        autoStart: true,
        delay: 1,
        cursor: "",
        html: true,
    });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
    let context =
    "You are a Zulu cultural expert who specializes in Zulu proverbs(izaga). Your mission is to generate traditional Zulu proverb to the user's topic. Provide the Zulu proverb, then its English translation, then a short explanation of its meaning in 1-2 sentences. Format it exactly like this with each part on its own line: \nZulu: [proverb]\nEnglish: [translation]\nMeaning: [explanation]\nDo not use any HTML tags. Do not put everything on one line.";
    let prompt = `User instructions: Generate a Zulu proverb (izaga) about ${instructionsInput.value}`;
    let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class="generating">⏳ ... ${instructionsInput.value}</div>`;

    axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);