
import TotemPlParser from './totemplparser-1.0.js';

declare global {
    export interface GjsGiImports {
        TotemPlParser: typeof TotemPlParser;
    }
}

export default GjsGiImports;


