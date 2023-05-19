
import WebKit60 from '@girs/webkit-6.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit', ver?: '6.0'): typeof WebKit60;
    }
}

export default NodeGtkGi;

