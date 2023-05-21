
import GWeather40 from '@girs/node-gweather-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GWeather', ver?: '4.0'): typeof GWeather40;
    }
}

export default NodeGtkGi;

