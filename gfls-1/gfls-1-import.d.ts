import type Gfls1 from '@girs/gfls-1';

declare global {
    export interface GjsGiImports {
        Gfls: typeof Gfls1;
    }
}

export default GjsGiImports;
