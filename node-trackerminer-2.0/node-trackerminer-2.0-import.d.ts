
import TrackerMiner20 from '@girs/node-trackerminer-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TrackerMiner', ver?: '2.0'): typeof TrackerMiner20;
    }
}

export default NodeGtkGi;

