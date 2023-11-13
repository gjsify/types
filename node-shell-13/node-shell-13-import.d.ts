
import Shell13 from '@girs/node-shell-13';

declare global {
    interface NodeGtkGi {
        require(ns: 'Shell', ver?: '13'): typeof Shell13;
    }
}

export default NodeGtkGi;

