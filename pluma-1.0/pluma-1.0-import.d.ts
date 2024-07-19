import Pluma10 from '@girs/pluma-1.0';

declare global {
    export interface GjsGiImports {
        Pluma: typeof Pluma10;
    }
}

export default GjsGiImports;
