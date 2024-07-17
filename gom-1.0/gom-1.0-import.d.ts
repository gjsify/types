
import Gom from './gom-1.0.js';

declare global {
    export interface GjsGiImports {
        Gom: typeof Gom;
    }
}

export default GjsGiImports;


