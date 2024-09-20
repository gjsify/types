import Tsparql30 from '@girs/tsparql-3.0';

declare global {
    export interface GjsGiImports {
        Tsparql: typeof Tsparql30;
    }
}

export default GjsGiImports;
