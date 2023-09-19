
import Flatpak10 from '@girs/node-flatpak-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Flatpak', ver?: '1.0'): typeof Flatpak10;
    }
}

export default NodeGtkGi;

