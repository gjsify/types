
import WebKit250 from '@girs/node-webkit2-5.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2', ver?: '5.0'): typeof WebKit250;
    }
}

export default NodeGtkGi;

