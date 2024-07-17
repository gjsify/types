
import Translit from './translit-1.0.js';

declare global {
    export interface GjsGiImports {
        Translit: typeof Translit;
    }
}

export default GjsGiImports;


