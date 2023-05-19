
import Arrow10 from '@girs/arrow-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Arrow', ver?: '1.0'): typeof Arrow10;
    }
}

export default NodeGtkGi;

