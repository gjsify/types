
import GTop20 from '@girs/node-gtop-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GTop', ver?: '2.0'): typeof GTop20;
    }
}

export default NodeGtkGi;

