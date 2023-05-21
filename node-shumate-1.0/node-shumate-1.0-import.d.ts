
import Shumate10 from '@girs/node-shumate-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shumate', ver?: '1.0'): typeof Shumate10;
    }
}

export default NodeGtkGi;

