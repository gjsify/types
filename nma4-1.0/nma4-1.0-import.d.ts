
import NMA410 from '@girs/nma4-1.0';

declare global {
    export interface GjsGiImports {
        NMA4: typeof NMA410;
    }
}

export default GjsGiImports;


