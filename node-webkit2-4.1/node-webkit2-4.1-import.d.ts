
import WebKit241 from '@girs/webkit2-4.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'WebKit2', ver?: '4.1'): typeof WebKit241;
    }
}

export default NodeGtkGi;

