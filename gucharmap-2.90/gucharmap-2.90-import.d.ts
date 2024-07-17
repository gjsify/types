
import Gucharmap from './gucharmap-2.90.js';

declare global {
    export interface GjsGiImports {
        Gucharmap: typeof Gucharmap;
    }
}

export default GjsGiImports;


