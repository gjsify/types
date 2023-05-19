
import FolksEds06 from '@girs/folkseds-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksEds', ver?: '0.6'): typeof FolksEds06;
    }
}

export default NodeGtkGi;

