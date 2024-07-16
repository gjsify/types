
import GSSDP from './gssdp-1.6.d.ts';

declare global {
    export interface GjsGiImports {
        GSSDP: typeof GSSDP;
    }
}

export default GjsGiImports;


