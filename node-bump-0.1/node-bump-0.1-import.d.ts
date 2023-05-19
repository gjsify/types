
import Bump01 from '@girs/bump-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Bump', ver?: '0.1'): typeof Bump01;
    }
}

export default NodeGtkGi;

