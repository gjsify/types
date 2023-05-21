
import Nice01 from '@girs/node-nice-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Nice', ver?: '0.1'): typeof Nice01;
    }
}

export default NodeGtkGi;

