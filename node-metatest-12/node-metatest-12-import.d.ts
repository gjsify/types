
import MetaTest12 from '@girs/node-metatest-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'MetaTest', ver?: '12'): typeof MetaTest12;
    }
}

export default NodeGtkGi;

