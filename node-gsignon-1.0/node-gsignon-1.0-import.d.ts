
import GSignon10 from '@girs/node-gsignon-1.0';

declare global {
    interface NodeGtkGi {
        require(ns: 'gSignon', ver?: '1.0'): typeof GSignon10;
    }
}

export default NodeGtkGi;

