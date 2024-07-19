import TotemPlParser10 from '@girs/totemplparser-1.0';

declare global {
    export interface GjsGiImports {
        TotemPlParser: typeof TotemPlParser10;
    }
}

export default GjsGiImports;
