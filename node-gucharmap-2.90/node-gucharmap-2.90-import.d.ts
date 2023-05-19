
import Gucharmap290 from '@girs/gucharmap-2.90';

declare global {
    interface NodeGtkGi {
        require(ns: 'Gucharmap', ver?: '2.90'): typeof Gucharmap290;
    }
}

export default NodeGtkGi;

