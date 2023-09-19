
import NMClient10 from '@girs/node-nmclient-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'NMClient', ver?: '1.0'): typeof NMClient10;
    }
}

export default NodeGtkGi;

