
import GLibUnix20 from '@girs/node-glibunix-2.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'GLibUnix', ver?: '2.0'): typeof GLibUnix20;
    }
}

export default NodeGtkGi;

