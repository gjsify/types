
import FolksTelepathy07 from '@girs/folkstelepathy-0.7';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksTelepathy', ver?: '0.7'): typeof FolksTelepathy07;
    }
}

export default NodeGtkGi;

