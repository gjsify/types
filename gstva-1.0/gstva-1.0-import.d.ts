import GstVa10 from '@girs/gstva-1.0';

declare global {
    export interface GjsGiImports {
        GstVa: typeof GstVa10;
    }
}

export default GjsGiImports;
