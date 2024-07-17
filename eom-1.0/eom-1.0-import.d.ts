
import Eom from './eom-1.0.js';

declare global {
    export interface GjsGiImports {
        Eom: typeof Eom;
    }
}

export default GjsGiImports;


