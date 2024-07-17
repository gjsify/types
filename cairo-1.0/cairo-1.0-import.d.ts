
import cairo from './cairo-1.0.js';

declare global {
    export interface GjsGiImports {
        cairo: typeof cairo;
    }
}

export default GjsGiImports;


