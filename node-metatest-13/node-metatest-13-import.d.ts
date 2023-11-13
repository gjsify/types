
import MetaTest13 from '@girs/node-metatest-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'MetaTest', ver?: '13'): typeof MetaTest13;
    }
}

export default NodeGtkGi;

