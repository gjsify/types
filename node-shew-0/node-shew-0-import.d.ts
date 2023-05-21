
import Shew0 from '@girs/node-shew-0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shew', ver?: '0'): typeof Shew0;
    }
}

export default NodeGtkGi;

