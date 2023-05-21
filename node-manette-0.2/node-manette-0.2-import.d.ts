
import Manette02 from '@girs/node-manette-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'Manette', ver?: '0.2'): typeof Manette02;
    }
}

export default NodeGtkGi;

