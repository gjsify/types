
import GWeather from './gweather-4.0.js';

declare global {
    export interface GjsGiImports {
        GWeather: typeof GWeather;
    }
}

export default GjsGiImports;


