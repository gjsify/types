import Fep10 from '@girs/fep-1.0';

declare global {
    export interface GjsGiImports {
        Fep: typeof Fep10;
    }
}

export default GjsGiImports;
