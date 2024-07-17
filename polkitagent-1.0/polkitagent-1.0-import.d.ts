
import PolkitAgent from './polkitagent-1.0.js';

declare global {
    export interface GjsGiImports {
        PolkitAgent: typeof PolkitAgent;
    }
}

export default GjsGiImports;


