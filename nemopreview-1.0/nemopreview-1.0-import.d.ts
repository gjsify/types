import NemoPreview10 from '@girs/nemopreview-1.0';

declare global {
    export interface GjsGiImports {
        NemoPreview: typeof NemoPreview10;
    }
}

export default GjsGiImports;
