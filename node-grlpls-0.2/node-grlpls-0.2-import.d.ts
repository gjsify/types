
import GrlPls02 from '@girs/node-grlpls-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GrlPls', ver?: '0.2'): typeof GrlPls02;
    }
}

export default NodeGtkGi;

