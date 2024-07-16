
import GstClapper from './gstclapper-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        GstClapper: typeof GstClapper;
    }
}

export default GjsGiImports;


