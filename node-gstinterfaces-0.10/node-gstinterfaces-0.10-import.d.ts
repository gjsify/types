
import GstInterfaces010 from '@girs/node-gstinterfaces-0.10';

declare global {
    interface NodeGtkGi {
        require(ns: 'GstInterfaces', ver?: '0.10'): typeof GstInterfaces010;
    }
}

export default NodeGtkGi;

