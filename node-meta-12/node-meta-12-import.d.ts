
import Meta12 from '@girs/meta-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Meta', ver?: '12'): typeof Meta12;
    }
}

export default NodeGtkGi;

