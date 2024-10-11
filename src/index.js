function displayPoem(response){
    console.log("poem generated");
    new Typewriter("#poem", {
      strings: response.data.answer,
      autoStart: true,
      delay: 1,
      cursor: "",
    });
}


function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "2a0btf0ao0fa13fec249490d3e8c2c77";
    let context = "You are a romantic poem expert and loves to write love poems.Your mission is to write four lines of poems, kindly seperate each line with a <br/>.Make sure to follow the user instructions.Sign the poem with 'SheCodes AI.' in <strong></strong>.";
    let prompt = `User instructions: Generate a Love Poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

let poemElement = document.querySelector("#poem");
poemElement.classList.remove("hidden");
poemElement.innerHTML = `<div class="generating">⏳ Generating Poem a Love poem about ${instructionsInput.value}</div>`;

    console.log("Generating Poem");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);
    
    axios.get(apiUrl).then(displayPoem);
    
}

let poemFormElement= document.querySelector("#poem-generator-form")
poemFormElement.addEventListener("submit", generatePoem);