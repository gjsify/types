
import IAnjuta from './ianjuta-3.0.js';

declare global {
    export interface GjsGiImports {
        IAnjuta: typeof IAnjuta;
    }
}

export default GjsGiImports;


