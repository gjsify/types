
import Unique30 from '@girs/unique-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Unique', ver?: '3.0'): typeof Unique30;
    }
}

export default NodeGtkGi;

