
import FolksDummy07 from '@girs/folksdummy-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksDummy', ver?: '0.7'): typeof FolksDummy07;
    }
}

export default NodeGtkGi;

