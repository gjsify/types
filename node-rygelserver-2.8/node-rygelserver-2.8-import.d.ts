
import RygelServer28 from '@girs/rygelserver-2.8';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelServer', ver?: '2.8'): typeof RygelServer28;
    }
}

export default NodeGtkGi;

