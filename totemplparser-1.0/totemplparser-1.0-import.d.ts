
import TotemPlParser from './totemplparser-1.0.d.ts';

declare global {
    export interface GjsGiImports {
        TotemPlParser: typeof TotemPlParser;
    }
}

export default GjsGiImports;


