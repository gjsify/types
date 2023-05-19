
import EvinceDocument30 from '@girs/evincedocument-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'EvinceDocument', ver?: '3.0'): typeof EvinceDocument30;
    }
}

export default NodeGtkGi;

