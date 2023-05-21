
import FolksEds07 from '@girs/node-folkseds-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksEds', ver?: '0.7'): typeof FolksEds07;
    }
}

export default NodeGtkGi;

