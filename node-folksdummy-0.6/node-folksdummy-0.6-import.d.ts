
import FolksDummy06 from '@girs/node-folksdummy-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksDummy', ver?: '0.6'): typeof FolksDummy06;
    }
}

export default NodeGtkGi;

