
import GMime30 from '@girs/gmime-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GMime', ver?: '3.0'): typeof GMime30;
    }
}

export default NodeGtkGi;

