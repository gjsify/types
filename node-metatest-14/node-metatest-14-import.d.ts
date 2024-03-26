
import MetaTest14 from '@girs/node-metatest-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'MetaTest', ver?: '14'): typeof MetaTest14;
    }
}

export default NodeGtkGi;

