import GstInsertBin10 from '@girs/gstinsertbin-1.0';

declare global {
    export interface GjsGiImports {
        GstInsertBin: typeof GstInsertBin10;
    }
}

export default GjsGiImports;
