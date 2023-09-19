
import Wnck30 from '@girs/node-wnck-3.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'Wnck', ver?: '3.0'): typeof Wnck30;
    }
}

export default NodeGtkGi;

