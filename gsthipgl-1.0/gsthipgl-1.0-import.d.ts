import type GstHipGL10 from '@girs/gsthipgl-1.0';

declare global {
    export interface GjsGiImports {
        GstHipGL: typeof GstHipGL10;
    }
}

export default GjsGiImports;
