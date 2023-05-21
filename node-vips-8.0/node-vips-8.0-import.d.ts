
import Vips80 from '@girs/node-vips-8.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Vips', ver?: '8.0'): typeof Vips80;
    }
}

export default NodeGtkGi;

