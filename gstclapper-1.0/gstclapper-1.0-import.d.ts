
import GstClapper from './gstclapper-1.0.js';

declare global {
    export interface GjsGiImports {
        GstClapper: typeof GstClapper;
    }
}

export default GjsGiImports;


