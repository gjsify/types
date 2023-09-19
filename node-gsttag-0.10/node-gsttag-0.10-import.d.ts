
import GstTag010 from '@girs/node-gsttag-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstTag', ver?: '0.10'): typeof GstTag010;
    }
}

export default NodeGtkGi;

