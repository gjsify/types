
import GstAudio010 from '@girs/gstaudio-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstAudio', ver?: '0.10'): typeof GstAudio010;
    }
}

export default NodeGtkGi;

