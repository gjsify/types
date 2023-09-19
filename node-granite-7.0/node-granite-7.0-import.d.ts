
import Granite70 from '@girs/node-granite-7.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Granite', ver?: '7.0'): typeof Granite70;
    }
}

export default NodeGtkGi;

