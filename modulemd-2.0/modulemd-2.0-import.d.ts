import Modulemd20 from '@girs/modulemd-2.0';

declare global {
    export interface GjsGiImports {
        Modulemd: typeof Modulemd20;
    }
}

export default GjsGiImports;
