
import Ide10 from '@girs/node-ide-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Ide', ver?: '1.0'): typeof Ide10;
    }
}

export default NodeGtkGi;

