
import GrlPls03 from '@girs/grlpls-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'GrlPls', ver?: '0.3'): typeof GrlPls03;
    }
}

export default NodeGtkGi;

