
import ClutterGdk10 from '@girs/node-cluttergdk-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'ClutterGdk', ver?: '1.0'): typeof ClutterGdk10;
    }
}

export default NodeGtkGi;

