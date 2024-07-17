
import Colord from './colord-1.0.js';

declare global {
    export interface GjsGiImports {
        Colord: typeof Colord;
    }
}

export default GjsGiImports;


