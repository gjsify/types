
import GWeather from './gweather-4.0.d.ts';

declare global {
    export interface GjsGiImports {
        GWeather: typeof GWeather;
    }
}

export default GjsGiImports;


