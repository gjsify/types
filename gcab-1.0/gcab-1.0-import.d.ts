
import GCab from './gcab-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GCab: typeof GCab;
    }
}

export default GjsGiImports;


