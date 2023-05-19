
import Adw1 from '@girs/adw-1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Adw', ver?: '1'): typeof Adw1;
    }
}

export default NodeGtkGi;

