import NMA10 from '@girs/nma-1.0';

declare global {
    export interface GjsGiImports {
        NMA: typeof NMA10;
    }
}

export default GjsGiImports;
