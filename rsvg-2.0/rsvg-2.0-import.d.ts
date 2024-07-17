
import Rsvg from './rsvg-2.0.js';

declare global {
    export interface GjsGiImports {
        Rsvg: typeof Rsvg;
    }
}

export default GjsGiImports;


