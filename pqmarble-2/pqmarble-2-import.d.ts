import PQMarble2 from '@girs/pqmarble-2';

declare global {
    export interface GjsGiImports {
        PQMarble: typeof PQMarble2;
    }
}

export default GjsGiImports;
