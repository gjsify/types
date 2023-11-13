
import Meta13 from '@girs/node-meta-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Meta', ver?: '13'): typeof Meta13;
    }
}

export default NodeGtkGi;

