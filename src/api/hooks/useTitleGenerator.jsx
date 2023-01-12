import { TITLE_PROMPT_ENDPOINT, DEFAULT_TITLE_OPTIONS } from "../constants/title.consts"
import { useCallback, useState } from 'react';

export const useTitleGenerator = () => {
    const [title, setTitle] = useState("");
    const [titleIsLoading, setTitleIsLoading] = useState(false);

    const changeTitleManually = useCallback((e) => {
        setTitle(e.target.value);
    }, []);

    const generateTitle = useCallback(async () => {
        try {
            setTitleIsLoading(true);
            const response = await fetch(TITLE_PROMPT_ENDPOINT, DEFAULT_TITLE_OPTIONS);
            const parsedResponse = await response.json();
            const title = parsedResponse.completions[0].data.text;
            setTitle(title);
            console.log('Generated title:', title);
        } catch (error) {
            console.error(error);
        } finally {
            setTitleIsLoading(false);
        }
    }, [setTitle, setTitleIsLoading]);

    return {
        title,
        changeTitleManually,
        titleIsLoading,
        generateTitle
    }
};