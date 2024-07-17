
import Vsqlite from './vsqlite-1.js';

declare global {
    export interface GjsGiImports {
        Vsqlite: typeof Vsqlite;
    }
}

export default GjsGiImports;


