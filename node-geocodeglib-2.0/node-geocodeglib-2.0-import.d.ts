
import GeocodeGlib20 from '@girs/node-geocodeglib-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GeocodeGlib', ver?: '2.0'): typeof GeocodeGlib20;
    }
}

export default NodeGtkGi;

