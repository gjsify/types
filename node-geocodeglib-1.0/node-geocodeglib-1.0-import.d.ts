
import GeocodeGlib10 from '@girs/node-geocodeglib-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GeocodeGlib', ver?: '1.0'): typeof GeocodeGlib10;
    }
}

export default NodeGtkGi;

