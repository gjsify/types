
import Poppler018 from '@girs/poppler-0.18';

declare global {
    interface NodeGtkGi {
        require(ns: 'Poppler', ver?: '0.18'): typeof Poppler018;
    }
}

export default NodeGtkGi;

