
import Signon20 from '@girs/node-signon-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Signon', ver?: '2.0'): typeof Signon20;
    }
}

export default NodeGtkGi;

