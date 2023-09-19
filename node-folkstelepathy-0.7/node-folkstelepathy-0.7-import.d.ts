
import FolksTelepathy07 from '@girs/node-folkstelepathy-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksTelepathy', ver?: '0.7'): typeof FolksTelepathy07;
    }
}

export default NodeGtkGi;

