
import Rest07 from '@girs/node-rest-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'Rest', ver?: '0.7'): typeof Rest07;
    }
}

export default NodeGtkGi;

