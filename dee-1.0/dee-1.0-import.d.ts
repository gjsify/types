
import Dee from './dee-1.0.js';

declare global {
    export interface GjsGiImports {
        Dee: typeof Dee;
    }
}

export default GjsGiImports;


