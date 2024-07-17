
import Xkl from './xkl-1.0.js';

declare global {
    export interface GjsGiImports {
        Xkl: typeof Xkl;
    }
}

export default GjsGiImports;


