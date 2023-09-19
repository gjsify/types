
import TrackerControl10 from '@girs/node-trackercontrol-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TrackerControl', ver?: '1.0'): typeof TrackerControl10;
    }
}

export default NodeGtkGi;

