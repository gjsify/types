
import GCalc2 from '@girs/node-gcalc-2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GCalc', ver?: '2'): typeof GCalc2;
    }
}

export default NodeGtkGi;

