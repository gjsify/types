
import Dazzle from './dazzle-1.0.js';

declare global {
    export interface GjsGiImports {
        Dazzle: typeof Dazzle;
    }
}

export default GjsGiImports;


