
import EDataServerUI12 from '@girs/edataserverui-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EDataServerUI', ver?: '1.2'): typeof EDataServerUI12;
    }
}

export default NodeGtkGi;

