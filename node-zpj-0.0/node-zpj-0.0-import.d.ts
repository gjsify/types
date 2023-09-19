
import Zpj00 from '@girs/node-zpj-0.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Zpj', ver?: '0.0'): typeof Zpj00;
    }
}

export default NodeGtkGi;

