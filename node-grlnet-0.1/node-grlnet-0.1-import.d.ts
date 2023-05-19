
import GrlNet01 from '@girs/grlnet-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'GrlNet', ver?: '0.1'): typeof GrlNet01;
    }
}

export default NodeGtkGi;

