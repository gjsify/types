
import Snapd1 from '@girs/snapd-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Snapd', ver?: '1'): typeof Snapd1;
    }
}

export default NodeGtkGi;

