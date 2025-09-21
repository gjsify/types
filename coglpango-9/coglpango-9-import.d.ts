import type CoglPango9 from '@girs/coglpango-9';

declare global {
    export interface GjsGiImports {
        CoglPango: typeof CoglPango9;
    }
}

export default GjsGiImports;
