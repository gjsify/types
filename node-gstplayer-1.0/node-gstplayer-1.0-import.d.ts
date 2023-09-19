
import GstPlayer10 from '@girs/node-gstplayer-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstPlayer', ver?: '1.0'): typeof GstPlayer10;
    }
}

export default NodeGtkGi;

