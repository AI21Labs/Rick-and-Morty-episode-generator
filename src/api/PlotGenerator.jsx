const PlotGenerator = (setPlot, setFetchPlotCompletion) => {
  console.log('PlotGeneratorFucntion Called');
  console.log('passed title state:' );
  const prompt = "" 

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
        setPlot(response.completions[0].data.text);
        setFetchPlotCompletion(false);
      })
      .catch((err) => console.error(err));
};

export default PlotGenerator