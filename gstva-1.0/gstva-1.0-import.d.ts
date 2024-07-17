
import GstVa from './gstva-1.0.js';

declare global {
    export interface GjsGiImports {
        GstVa: typeof GstVa;
    }
}

export default GjsGiImports;


