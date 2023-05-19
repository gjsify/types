
import TrackerControl20 from '@girs/trackercontrol-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TrackerControl', ver?: '2.0'): typeof TrackerControl20;
    }
}

export default NodeGtkGi;

