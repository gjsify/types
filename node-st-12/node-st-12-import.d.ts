
import St12 from '@girs/node-st-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'St', ver?: '12'): typeof St12;
    }
}

export default NodeGtkGi;

