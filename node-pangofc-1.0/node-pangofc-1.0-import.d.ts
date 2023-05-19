
import PangoFc10 from '@girs/pangofc-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PangoFc', ver?: '1.0'): typeof PangoFc10;
    }
}

export default NodeGtkGi;

