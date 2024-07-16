
import cairo from './cairo-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        cairo: typeof cairo;
    }
}

export default GjsGiImports;


