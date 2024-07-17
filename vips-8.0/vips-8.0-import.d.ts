
import Vips from './vips-8.0.js';

declare global {
    export interface GjsGiImports {
        Vips: typeof Vips;
    }
}

export default GjsGiImports;


