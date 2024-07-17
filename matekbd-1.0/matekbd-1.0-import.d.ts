
import Matekbd from './matekbd-1.0.js';

declare global {
    export interface GjsGiImports {
        Matekbd: typeof Matekbd;
    }
}

export default GjsGiImports;


