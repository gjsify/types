
import Notify07 from '@girs/notify-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'Notify', ver?: '0.7'): typeof Notify07;
    }
}

export default NodeGtkGi;

