
import Win3210 from '@girs/win32-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'win32', ver?: '1.0'): typeof Win3210;
    }
}

export default NodeGtkGi;

