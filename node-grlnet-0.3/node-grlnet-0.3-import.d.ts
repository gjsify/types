
import GrlNet03 from '@girs/grlnet-0.3';

declare global {
    interface NodeGtkGi {
        require(ns: 'GrlNet', ver?: '0.3'): typeof GrlNet03;
    }
}

export default NodeGtkGi;

