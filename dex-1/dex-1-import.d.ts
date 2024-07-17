
import Dex from './dex-1.js';

declare global {
    export interface GjsGiImports {
        Dex: typeof Dex;
    }
}

export default GjsGiImports;


