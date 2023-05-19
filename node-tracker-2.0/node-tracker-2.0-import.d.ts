
import Tracker20 from '@girs/tracker-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tracker', ver?: '2.0'): typeof Tracker20;
    }
}

export default NodeGtkGi;

