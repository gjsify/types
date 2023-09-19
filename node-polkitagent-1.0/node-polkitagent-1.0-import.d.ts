
import PolkitAgent10 from '@girs/node-polkitagent-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'PolkitAgent', ver?: '1.0'): typeof PolkitAgent10;
    }
}

export default NodeGtkGi;

