
import GSSDP from './gssdp-1.6.js';

declare global {
    export interface GjsGiImports {
        GSSDP: typeof GSSDP;
    }
}

export default GjsGiImports;


