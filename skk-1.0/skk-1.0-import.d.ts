
import Skk from './skk-1.0.js';

declare global {
    export interface GjsGiImports {
        Skk: typeof Skk;
    }
}

export default GjsGiImports;


