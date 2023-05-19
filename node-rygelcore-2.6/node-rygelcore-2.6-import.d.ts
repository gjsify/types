
import RygelCore26 from '@girs/rygelcore-2.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'RygelCore', ver?: '2.6'): typeof RygelCore26;
    }
}

export default NodeGtkGi;

