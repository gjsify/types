
import Mx20 from '@girs/node-mx-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Mx', ver?: '2.0'): typeof Mx20;
    }
}

export default NodeGtkGi;

