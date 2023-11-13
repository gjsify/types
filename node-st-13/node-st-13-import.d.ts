
import St13 from '@girs/node-st-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'St', ver?: '13'): typeof St13;
    }
}

export default NodeGtkGi;

