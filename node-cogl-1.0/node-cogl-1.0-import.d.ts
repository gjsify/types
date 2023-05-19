
import Cogl10 from '@girs/cogl-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '1.0'): typeof Cogl10;
    }
}

export default NodeGtkGi;

