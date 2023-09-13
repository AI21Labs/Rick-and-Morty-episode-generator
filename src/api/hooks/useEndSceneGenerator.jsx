import { useCallback, useState } from 'react';
import { generateEndSceneOptions, END_SCENE_PROMPT_ENDPOINT } from '../constants/endScene.consts';

/* Usage of up to date methods (Functional components, React hooks) */

export const useEndSceneGenerator = (plot) => { // Self explanatory function name
    const [endScene, setEndScene] = useState(""); // Set the end scene state here
    const [endSceneIsLoading, setEndSceneIsLoading] = useState(false);  

    const changeEndSceneManually = useCallback((e) => {
        setEndScene(e.target.value);
    }, []);

    const generateEndScene = useCallback(async () => { // async-await function to handle asynchronous
        try {
            setEndSceneIsLoading(true);
            const options = generateEndSceneOptions(plot);
            const response = await fetch(END_SCENE_PROMPT_ENDPOINT, options);
            const parsedResponse = await response.json();
            const endScene = parsedResponse.completions[0].data.text;
            console.log('Generated end scene:', endScene); // Devtool help
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