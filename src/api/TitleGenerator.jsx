const TitleGenerator = (setTitle, setFetchTitleCompletion) => {
  console.log('TitleGeneratorFucntion Called');
  const prompt = `Generate a new made up Rick and Morty episode title: Rickwarium Full of Mortfish\n##\nGenerate a new made up Rick and Morty episode title: Where Do The Ricks Play\n##\nGenerate a new made up Rick and Morty episode title: The Mortysburg Syndrome\n##\nGenerate a new made up Rick and Morty episode title: Where The Wild Morties Go\n##\nGenerate a new made up Rick and Morty episode title: Outrickous\n##\nGenerate a new made up Rick and Morty episode title: The Birdperson Paradox\n##\nGenerate a new made up Rick and Morty episode title: Jerry's Space Addiction\n##\nGenerate a new made up Rick and Morty episode title: Morty Christ Superstar\n##\nGenerate a new made up Rick and Morty episode title:`;

    const options = {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        Authorization: "Bearer FG3LpwPivrvT6ou83Bq7dEnL0lYWnmQS",
      },
      body: JSON.stringify({
        numResults: 1,
        maxTokens: 6,
        minTokens: 0,
        temperature: 0.9,
        topP: 1,
        topKReturn: 0,
        frequencyPenalty: {
          scale: 1,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true,
        },
        presencePenalty: {
          scale: 0,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true,
        },
        countPenalty: {
          scale: 0,
          applyToWhitespaces: true,
          applyToPunctuations: true,
          applyToNumbers: true,
          applyToStopwords: true,
          applyToEmojis: true,
        },
        prompt: prompt,
      })
    };
    
    fetch(
      "https://api.ai21.com/studio/v1/j1-grande/complete",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setTitle(response.completions[0].data.text);
        setFetchTitleCompletion(false);
      })
      .catch((err) => console.error(err));
};

export default TitleGenerator