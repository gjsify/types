import type Budgie30 from '@girs/budgie-3.0';

declare global {
    export interface GjsGiImports {
        Budgie: typeof Budgie30;
    }
}

export default GjsGiImports;
