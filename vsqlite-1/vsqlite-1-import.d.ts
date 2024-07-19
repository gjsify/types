import Vsqlite1 from '@girs/vsqlite-1';

declare global {
    export interface GjsGiImports {
        Vsqlite: typeof Vsqlite1;
    }
}

export default GjsGiImports;
