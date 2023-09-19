
import Template10 from '@girs/node-template-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Template', ver?: '1.0'): typeof Template10;
    }
}

export default NodeGtkGi;

