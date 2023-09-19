
import GjsDBus10 from '@girs/node-gjsdbus-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GjsDBus', ver?: '1.0'): typeof GjsDBus10;
    }
}

export default NodeGtkGi;

