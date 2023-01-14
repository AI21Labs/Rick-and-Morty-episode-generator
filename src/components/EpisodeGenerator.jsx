import React from "react";
import { TextInput } from "./TextInput.jsx";
import { useTitleGenerator } from "../api/hooks/useTitleGenerator";
import { usePlotGenerator } from "../api/hooks/usePlotGenerator";
import { useEndSceneGenerator } from "../api/hooks/useEndSceneGenerator";
import { Button } from "./Button";

// ----- **** ------------------- ****** --------------******-------- //

function EpisodeGenerator() {
  const { title, changeTitleManually, titleIsLoading, generateTitle } =
    useTitleGenerator();
  const { plot, changePlotManually, plotIsLoading, generatePlot } =
    usePlotGenerator(title);
  const { endScene, changeEndSceneManually, EndSceneIsLoading, generateEndScene } =
    useEndSceneGenerator(title, plot); 
  return (
    <div className="generate-container">
      <div className="generte-form">
        <div className="generate-mini-form">
          <Button
          /* ------------ Repetitive code ------------ */
            onClick={generateTitle} 
            isDisabled={titleIsLoading}
            text={"Generate Title"}
            isLoading={titleIsLoading}
          />
          <TextInput value={title} height={'55px'} onChange={changeTitleManually} />
        </div>
        <div className="generate-mini-form">
          <Button
            onClick={generatePlot}
            isDisabled={plotIsLoading || !title}
            text={"Generate Plot"}
            isLoading={plotIsLoading}
          />
          <TextInput value={plot} height={'145px'} onChange={changePlotManually} />
        </div>
        <div className="generate-mini-form">
          <Button
            onClick={generateEndScene}
            isDisabled={EndSceneIsLoading || !title}
            text={"Generate End Scene"}
            isLoading={EndSceneIsLoading}
          />
          <TextInput value={endScene} height={'55px'} onChange={changeEndSceneManually} />
        </div>
      </div>
    </div>
  );
}

export default EpisodeGenerator;
