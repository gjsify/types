
import GWeather30 from '@girs/gweather-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GWeather', ver?: '3.0'): typeof GWeather30;
    }
}

export default NodeGtkGi;

