
import GstTag10 from '@girs/node-gsttag-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstTag', ver?: '1.0'): typeof GstTag10;
    }
}

export default NodeGtkGi;

