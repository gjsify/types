import type Casilda10 from '@girs/casilda-1.0';

declare global {
    export interface GjsGiImports {
        Casilda: typeof Casilda10;
    }
}

export default GjsGiImports;
