
import GitgExt10 from '@girs/gitgext-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GitgExt', ver?: '1.0'): typeof GitgExt10;
    }
}

export default NodeGtkGi;

