
import GWeather30 from '@girs/gweather-3.0';

declare global {
    export interface GjsGiImports {
        GWeather: typeof GWeather30;
    }
}

export default GjsGiImports;


