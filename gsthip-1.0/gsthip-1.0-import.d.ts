import type GstHip10 from '@girs/gsthip-1.0';

declare global {
    export interface GjsGiImports {
        GstHip: typeof GstHip10;
    }
}

export default GjsGiImports;
