
import NetworkManager10 from '@girs/networkmanager-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'NetworkManager', ver?: '1.0'): typeof NetworkManager10;
    }
}

export default NodeGtkGi;

