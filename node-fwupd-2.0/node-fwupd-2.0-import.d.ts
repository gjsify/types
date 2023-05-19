
import Fwupd20 from '@girs/fwupd-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Fwupd', ver?: '2.0'): typeof Fwupd20;
    }
}

export default NodeGtkGi;

