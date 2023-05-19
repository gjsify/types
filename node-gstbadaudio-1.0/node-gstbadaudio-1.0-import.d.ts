
import GstBadAudio10 from '@girs/gstbadaudio-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstBadAudio', ver?: '1.0'): typeof GstBadAudio10;
    }
}

export default NodeGtkGi;

