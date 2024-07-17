
import NemoPreview from './nemopreview-1.0.js';

declare global {
    export interface GjsGiImports {
        NemoPreview: typeof NemoPreview;
    }
}

export default GjsGiImports;


