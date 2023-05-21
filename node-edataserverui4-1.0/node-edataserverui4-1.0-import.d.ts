
import EDataServerUI410 from '@girs/node-edataserverui4-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'EDataServerUI4', ver?: '1.0'): typeof EDataServerUI410;
    }
}

export default NodeGtkGi;

