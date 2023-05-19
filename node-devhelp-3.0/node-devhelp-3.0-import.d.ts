
import Devhelp30 from '@girs/devhelp-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Devhelp', ver?: '3.0'): typeof Devhelp30;
    }
}

export default NodeGtkGi;

