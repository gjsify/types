
import Pango from './pango-1.0.js';

declare global {
    export interface GjsGiImports {
        Pango: typeof Pango;
    }
}

export default GjsGiImports;


