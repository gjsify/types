
import Xfixes40 from '@girs/xfixes-4.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'xfixes', ver?: '4.0'): typeof Xfixes40;
    }
}

export default NodeGtkGi;

