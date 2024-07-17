
import PQMarble from './pqmarble-2.js';

declare global {
    export interface GjsGiImports {
        PQMarble: typeof PQMarble;
    }
}

export default GjsGiImports;


