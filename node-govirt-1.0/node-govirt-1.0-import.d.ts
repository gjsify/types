
import GoVirt10 from '@girs/govirt-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GoVirt', ver?: '1.0'): typeof GoVirt10;
    }
}

export default NodeGtkGi;

