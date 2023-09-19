
import PangoXft10 from '@girs/node-pangoxft-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PangoXft', ver?: '1.0'): typeof PangoXft10;
    }
}

export default NodeGtkGi;

