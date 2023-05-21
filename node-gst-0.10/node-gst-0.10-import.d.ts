
import Gst010 from '@girs/node-gst-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gst', ver?: '0.10'): typeof Gst010;
    }
}

export default NodeGtkGi;

