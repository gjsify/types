
import EvinceView30 from '@girs/evinceview-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'EvinceView', ver?: '3.0'): typeof EvinceView30;
    }
}

export default NodeGtkGi;

