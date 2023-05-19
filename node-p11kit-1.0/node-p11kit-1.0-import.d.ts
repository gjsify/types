
import P11Kit10 from '@girs/p11kit-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'P11Kit', ver?: '1.0'): typeof P11Kit10;
    }
}

export default NodeGtkGi;

