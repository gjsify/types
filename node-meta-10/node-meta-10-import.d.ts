
import Meta10 from '@girs/node-meta-10';

declare global {
    interface NodeGtkGi {
        require(ns: 'Meta', ver?: '10'): typeof Meta10;
    }
}

export default NodeGtkGi;

