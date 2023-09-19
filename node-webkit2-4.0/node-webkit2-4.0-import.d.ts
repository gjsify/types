
import WebKit240 from '@girs/node-webkit2-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2', ver?: '4.0'): typeof WebKit240;
    }
}

export default NodeGtkGi;

