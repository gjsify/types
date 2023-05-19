
import Granite10 from '@girs/granite-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Granite', ver?: '1.0'): typeof Granite10;
    }
}

export default NodeGtkGi;

