
import Pango10 from '@girs/pango-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Pango', ver?: '1.0'): typeof Pango10;
    }
}

export default NodeGtkGi;

