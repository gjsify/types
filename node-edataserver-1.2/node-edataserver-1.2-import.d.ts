
import EDataServer12 from '@girs/node-edataserver-1.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'EDataServer', ver?: '1.2'): typeof EDataServer12;
    }
}

export default NodeGtkGi;

