
import GCalc1 from '@girs/node-gcalc-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GCalc', ver?: '1'): typeof GCalc1;
    }
}

export default NodeGtkGi;

