
import St14 from '@girs/node-st-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'St', ver?: '14'): typeof St14;
    }
}

export default NodeGtkGi;

