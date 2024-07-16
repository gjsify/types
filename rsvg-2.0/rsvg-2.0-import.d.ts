
import Rsvg from './rsvg-2.0.d.ts';

declare global {
    export interface GjsGiImports {
        Rsvg: typeof Rsvg;
    }
}

export default GjsGiImports;


