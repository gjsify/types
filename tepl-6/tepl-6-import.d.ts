
import Tepl from './tepl-6.js';

declare global {
    export interface GjsGiImports {
        Tepl: typeof Tepl;
    }
}

export default GjsGiImports;


