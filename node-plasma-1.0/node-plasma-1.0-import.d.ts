
import Plasma10 from '@girs/node-plasma-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Plasma', ver?: '1.0'): typeof Plasma10;
    }
}

export default NodeGtkGi;

