
import Tracker30 from '@girs/node-tracker-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tracker', ver?: '3.0'): typeof Tracker30;
    }
}

export default NodeGtkGi;

