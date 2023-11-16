
import Rsvg20 from '@girs/rsvg-2.0';

declare global {
    export interface GjsGiImports {
        Rsvg: typeof Rsvg20;
    }
}

export default GjsGiImports;


