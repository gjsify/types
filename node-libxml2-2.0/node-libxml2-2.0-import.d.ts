
import Libxml220 from '@girs/libxml2-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'libxml2', ver?: '2.0'): typeof Libxml220;
    }
}

export default NodeGtkGi;

