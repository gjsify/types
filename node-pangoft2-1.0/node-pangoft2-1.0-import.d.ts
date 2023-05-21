
import PangoFT210 from '@girs/node-pangoft2-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PangoFT2', ver?: '1.0'): typeof PangoFT210;
    }
}

export default NodeGtkGi;

