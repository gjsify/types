
import Shell14 from '@girs/node-shell-14';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shell', ver?: '14'): typeof Shell14;
    }
}

export default NodeGtkGi;

