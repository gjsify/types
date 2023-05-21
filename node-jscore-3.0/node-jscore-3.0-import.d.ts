
import JSCore30 from '@girs/node-jscore-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'JSCore', ver?: '3.0'): typeof JSCore30;
    }
}

export default NodeGtkGi;

