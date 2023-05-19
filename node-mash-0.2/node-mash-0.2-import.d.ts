
import Mash02 from '@girs/mash-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mash', ver?: '0.2'): typeof Mash02;
    }
}

export default NodeGtkGi;

