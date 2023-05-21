
import GData00 from '@girs/node-gdata-0.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GData', ver?: '0.0'): typeof GData00;
    }
}

export default NodeGtkGi;

