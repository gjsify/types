
import NMA from './nma-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        NMA: typeof NMA;
    }
}

export default GjsGiImports;


