
import GMime30 from '@girs/node-gmime-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GMime', ver?: '3.0'): typeof GMime30;
    }
}

export default NodeGtkGi;

