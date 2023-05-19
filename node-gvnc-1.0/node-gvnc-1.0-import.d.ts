
import GVnc10 from '@girs/gvnc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GVnc', ver?: '1.0'): typeof GVnc10;
    }
}

export default NodeGtkGi;

