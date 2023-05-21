
import GstAudio10 from '@girs/node-gstaudio-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstAudio', ver?: '1.0'): typeof GstAudio10;
    }
}

export default NodeGtkGi;

