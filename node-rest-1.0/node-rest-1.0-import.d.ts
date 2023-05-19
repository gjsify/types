
import Rest10 from '@girs/rest-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Rest', ver?: '1.0'): typeof Rest10;
    }
}

export default NodeGtkGi;

