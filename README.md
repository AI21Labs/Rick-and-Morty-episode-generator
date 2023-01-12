<p align="center">
<img src="https://user-images.githubusercontent.com/118735447/212035080-e4f736c7-94a7-4381-a3c6-ce18cdb7e761.png" width="400">
</p>
# Rick and Morty Episode Generator

An interactive one-pager browser game, primarily built with React.js. It makes use of the state-of-the-art Jurassic-1 language model to generate made-up episodes of the popular animated science fiction TV show Rick and Morty.

## Getting Started
1. Clone the repository 

`git clone https://github.com/AI21Labs/Rick-and-Morty-Episode-Generator.git`

2. Install dependencies

`npm install`

3. Start the game in your local environment

`npm start`

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Play

1. Get your API key from your [account](https://studio.ai21.com/account/account) page, and paste it in [apiKey.consts.js](src/api/constants/apiKey.consts.js) file. Now you are all set and ready to play!
<br />
2. Press the "Generate Title" button, which will invoke the generateTitle() function. This function sends an API request to the /complete endpoint of the Jurassic-1 Grande model. The main request includes a "few shot" prompt parameter with a value that prompts the model to generate a new made-up Rick and Morty episode title. Other parameters worth noticing are `maxTokens`, `temperature`, and `stopSequences`.
<br />
3. Once the model returns a response, it is rendered in the text field next to the "Generate Title" button.
<br />
4. The second button, "Generate Plot", becomes clickable, and when clicked, invokes the generatePlot() function. The function takes the generated title and uses it as the prompt value in another API request to Jurassic-1 Grande. This time, the model returns a longer response with a made-up plot for the made-up title.
<br />
5. The last button, "Generate End Scene", uses the same functionality as the "Generate Plot" button to create a post-credits scene.

## Contribute

This is an open source project. 
Your contributions are welcome!

<p align="center">
Made with ❤️ by the AI21 Labs team 
</p>
