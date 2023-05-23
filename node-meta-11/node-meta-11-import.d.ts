
import Meta11 from '@girs/node-meta-11';

declare global {
    interface NodeGtkGi {
        require(ns: 'Meta', ver?: '11'): typeof Meta11;
    }
}

export default NodeGtkGi;

