
import freetype2 from './freetype2-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        freetype2: typeof freetype2;
    }
}

export default GjsGiImports;


