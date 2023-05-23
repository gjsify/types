
import Shell01 from '@girs/node-shell-0.1';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shell', ver?: '0.1'): typeof Shell01;
    }
}

export default NodeGtkGi;

