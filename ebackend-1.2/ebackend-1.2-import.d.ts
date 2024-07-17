
import EBackend from './ebackend-1.2.js';

declare global {
    export interface GjsGiImports {
        EBackend: typeof EBackend;
    }
}

export default GjsGiImports;


