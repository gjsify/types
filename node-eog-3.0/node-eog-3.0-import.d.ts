
import Eog30 from '@girs/eog-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Eog', ver?: '3.0'): typeof Eog30;
    }
}

export default NodeGtkGi;

