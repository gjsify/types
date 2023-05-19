
import PangoOT10 from '@girs/pangoot-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PangoOT', ver?: '1.0'): typeof PangoOT10;
    }
}

export default NodeGtkGi;

