
import GCab from './gcab-1.0.js';

declare global {
    export interface GjsGiImports {
        GCab: typeof GCab;
    }
}

export default GjsGiImports;


