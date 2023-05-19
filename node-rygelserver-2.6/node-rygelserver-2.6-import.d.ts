
import RygelServer26 from '@girs/rygelserver-2.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelServer', ver?: '2.6'): typeof RygelServer26;
    }
}

export default NodeGtkGi;

