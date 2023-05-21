
import Rsvg20 from '@girs/node-rsvg-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Rsvg', ver?: '2.0'): typeof Rsvg20;
    }
}

export default NodeGtkGi;

