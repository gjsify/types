
import Guestfs10 from '@girs/guestfs-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Guestfs', ver?: '1.0'): typeof Guestfs10;
    }
}

export default NodeGtkGi;

