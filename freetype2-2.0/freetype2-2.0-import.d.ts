
import freetype2 from './freetype2-2.0.js';

declare global {
    export interface GjsGiImports {
        freetype2: typeof freetype2;
    }
}

export default GjsGiImports;


