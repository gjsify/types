
import GUdev10 from '@girs/gudev-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GUdev', ver?: '1.0'): typeof GUdev10;
    }
}

export default NodeGtkGi;

