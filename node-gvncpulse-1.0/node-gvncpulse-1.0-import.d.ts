
import GVncPulse10 from '@girs/node-gvncpulse-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GVncPulse', ver?: '1.0'): typeof GVncPulse10;
    }
}

export default NodeGtkGi;

