
import Vsqlite from './vsqlite-1.d.ts';

declare global {
    export interface GjsGiImports {
        Vsqlite: typeof Vsqlite;
    }
}

export default GjsGiImports;


