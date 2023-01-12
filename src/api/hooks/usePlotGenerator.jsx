import { useCallback, useState } from 'react';
import { generatePlotOptions, PLOT_PROMPT_ENDPOINT } from '../constants/plot.consts';

export const usePlotGenerator = (title) => {
    const [plot, setPlot] = useState("");
    const [plotIsLoading, setPlotIsLoading] = useState(false);

    const changePlotManually = useCallback((e) => {
        setPlot(e.target.value);
    }, []);

    const generatePlot = useCallback(async () => {
        try {
            setPlotIsLoading(true);
            const options = generatePlotOptions(title);
            const response = await fetch(PLOT_PROMPT_ENDPOINT, options);
            const parsedResponse = await response.json();
            const plot = parsedResponse.completions[0].data.text;
            console.log('Generated plot:', plot);
            setPlot(plot);
        } catch (error) {
            console.error(error);
        } finally {
            setPlotIsLoading(false);
        }
    }, [setPlotIsLoading, setPlot, title]);

    return {
        plot, 
        changePlotManually,
        generatePlot,
        plotIsLoading
    }
};