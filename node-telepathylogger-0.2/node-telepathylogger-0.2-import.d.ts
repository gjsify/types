
import TelepathyLogger02 from '@girs/node-telepathylogger-0.2';

declare global {
    interface NodeGtkGi {
        require(ns: 'TelepathyLogger', ver?: '0.2'): typeof TelepathyLogger02;
    }
}

export default NodeGtkGi;

