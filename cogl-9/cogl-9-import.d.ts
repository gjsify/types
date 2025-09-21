import type Cogl9 from '@girs/cogl-9';

declare global {
    export interface GjsGiImports {
        Cogl: typeof Cogl9;
    }
}

export default GjsGiImports;
