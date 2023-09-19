
import Gpseq10 from '@girs/node-gpseq-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gpseq', ver?: '1.0'): typeof Gpseq10;
    }
}

export default NodeGtkGi;

