
import FolksTelepathy06 from '@girs/node-folkstelepathy-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksTelepathy', ver?: '0.6'): typeof FolksTelepathy06;
    }
}

export default NodeGtkGi;

