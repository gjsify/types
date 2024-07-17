
import Gvc from './gvc-1.0.js';

declare global {
    export interface GjsGiImports {
        Gvc: typeof Gvc;
    }
}

export default GjsGiImports;


