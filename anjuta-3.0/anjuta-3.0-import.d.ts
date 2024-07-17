
import Anjuta from './anjuta-3.0.js';

declare global {
    export interface GjsGiImports {
        Anjuta: typeof Anjuta;
    }
}

export default GjsGiImports;


