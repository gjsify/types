
import SpiceClientGLib20 from '@girs/node-spiceclientglib-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'SpiceClientGLib', ver?: '2.0'): typeof SpiceClientGLib20;
    }
}

export default NodeGtkGi;

