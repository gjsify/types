
import Meta14 from '@girs/node-meta-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Meta', ver?: '14'): typeof Meta14;
    }
}

export default NodeGtkGi;

