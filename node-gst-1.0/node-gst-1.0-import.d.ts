
import Gst10 from '@girs/gst-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gst', ver?: '1.0'): typeof Gst10;
    }
}

export default NodeGtkGi;

