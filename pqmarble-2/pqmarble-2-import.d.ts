
import PQMarble from './pqmarble-2.d.ts';

declare global {
    export interface GjsGiImports {
        PQMarble: typeof PQMarble;
    }
}

export default GjsGiImports;


