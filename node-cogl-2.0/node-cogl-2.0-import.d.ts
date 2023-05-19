
import Cogl20 from '@girs/cogl-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Cogl', ver?: '2.0'): typeof Cogl20;
    }
}

export default NodeGtkGi;

