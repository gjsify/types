
import Geoclue20 from '@girs/geoclue-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Geoclue', ver?: '2.0'): typeof Geoclue20;
    }
}

export default NodeGtkGi;

