
import GConf20 from '@girs/node-gconf-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GConf', ver?: '2.0'): typeof GConf20;
    }
}

export default NodeGtkGi;

