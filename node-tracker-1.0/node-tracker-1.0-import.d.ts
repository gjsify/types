
import Tracker10 from '@girs/node-tracker-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Tracker', ver?: '1.0'): typeof Tracker10;
    }
}

export default NodeGtkGi;

