import { useCallback, useState } from 'react';
import { generateEndSceneOptions, END_SCENE_PROMPT_ENDPOINT } from '../constants/endScene.consts';

export const useEndSceneGenerator = (plot) => {
    const [endScene, setEndScene] = useState("");
    const [endSceneIsLoading, setEndSceneIsLoading] = useState(false);

    const changeEndSceneManually = useCallback((e) => {
        setEndScene(e.target.value);
    }, []);

    const generateEndScene = useCallback(async () => {
        try {
            setEndSceneIsLoading(true);
            const options = generateEndSceneOptions(plot);
            const response = await fetch(END_SCENE_PROMPT_ENDPOINT, options);
            const parsedResponse = await response.json();
            const endScene = parsedResponse.completions[0].data.text;
            console.log('Generated end scene:', endScene);
            setEndScene(endScene);
        } catch (error) {
            console.error(error);
        } finally {
            setEndSceneIsLoading(false);
        }
    }, [setEndSceneIsLoading, setEndScene, plot]);

    return {
        endScene, 
        changeEndSceneManually,
        generateEndScene,
        endSceneIsLoading
    }
};