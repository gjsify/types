import GWeather40 from '@girs/gweather-4.0';

declare global {
    export interface GjsGiImports {
        GWeather: typeof GWeather40;
    }
}

export default GjsGiImports;
