
import FolksLibsocialweb06 from '@girs/folkslibsocialweb-0.6';

declare global {
    interface NodeGtkGi {
        require(ns: 'FolksLibsocialweb', ver?: '0.6'): typeof FolksLibsocialweb06;
    }
}

export default NodeGtkGi;

