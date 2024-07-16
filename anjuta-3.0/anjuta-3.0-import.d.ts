
import Anjuta from './anjuta-3.0.d.ts';

declare global {
    export interface GjsGiImports {
        Anjuta: typeof Anjuta;
    }
}

export default GjsGiImports;


