
import GrlNet02 from '@girs/node-grlnet-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'GrlNet', ver?: '0.2'): typeof GrlNet02;
    }
}

export default NodeGtkGi;

