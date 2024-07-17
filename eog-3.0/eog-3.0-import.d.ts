
import Eog from './eog-3.0.js';

declare global {
    export interface GjsGiImports {
        Eog: typeof Eog;
    }
}

export default GjsGiImports;


