
import Shell12 from '@girs/node-shell-12';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shell', ver?: '12'): typeof Shell12;
    }
}

export default NodeGtkGi;

