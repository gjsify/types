
import TrackerMiner10 from '@girs/node-trackerminer-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'TrackerMiner', ver?: '1.0'): typeof TrackerMiner10;
    }
}

export default NodeGtkGi;

