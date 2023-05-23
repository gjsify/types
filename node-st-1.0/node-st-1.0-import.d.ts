
import St10 from '@girs/node-st-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'St', ver?: '1.0'): typeof St10;
    }
}

export default NodeGtkGi;

